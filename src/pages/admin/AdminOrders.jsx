import AdminLayout from '../../components/common/AdminLayout';
import React, { useState, useEffect } from 'react';
import { User, Eye, ShoppingBag } from 'lucide-react';
const AdminOrders = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [newStatus, setNewStatus] = useState('');
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const itemsPerPage = 7;

  const handleUpdateStatus = () => {
    if (!newStatus) {
      setErrorMessage('Please select a status');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    fetch(`http://localhost:8080/api/orders/${selectedOrder.id}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
      .then(res => res.text())
      .then(result => {
        setSuccessMessage(result);
        setTimeout(() => setSuccessMessage(''), 3000);
        setSelectedOrder(null);
        setNewStatus('');
        // Refresh orders
        fetch("http://localhost:8080/api/orders")
          .then(res => res.json())
          .then(data => {
            const formatted = data.map(order => ({
              id: order.id,
              name: order.name,
              userId: order.userId,
              mobile: null,
              email: null,
              service: order.serviceName,
              status: order.status,
              extraData: order.extraData,
              date: new Date(order.createdAt).toLocaleDateString()
            }));
            const sorted = formatted.sort((a, b) => b.id - a.id);
            setOrders(sorted);

            sorted.forEach(order => {
              if (order.userId) {
                fetch(`http://localhost:8080/api/users/${order.userId}`)
                  .then(res => res.json())
                  .then(user => {
                    setOrders(prev => prev.map(o =>
                      o.id === order.id ? { ...o, mobile: user.phone || null, email: user.email || null } : o
                    ));
                  })
                  .catch(() => {});
              }
            });
          });
      })
      .catch(err => {
        console.error(err);
        setErrorMessage('Failed to update status');
        setTimeout(() => setErrorMessage(''), 3000);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(order => ({
          id: order.id,
          name: order.name,
          userId: order.userId,
          mobile: null,
          email: null,
          service: order.serviceName,
          status: order.status,
          extraData: order.extraData,
          date: new Date(order.createdAt).toLocaleDateString()
        }));
        const sorted = formatted.sort((a, b) => b.id - a.id);
        setOrders(sorted);

        sorted.forEach(order => {
          if (order.userId) {
            fetch(`http://localhost:8080/api/users/${order.userId}`)
              .then(res => res.json())
              .then(user => {
                setOrders(prev => prev.map(o =>
                  o.id === order.id ? { ...o, mobile: user.phone || null, email: user.email || null } : o
                ));
              })
              .catch(() => {});
          }
        });
      });
  }, []);

  const filteredOrders = orders
    .filter(order => activeTab === 'All Orders' ? true : order.status === activeTab)
    .filter(order => 
      searchQuery === '' ? true : 
      order.id.toString().includes(searchQuery) || 
      order.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <ShoppingBag className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
        <h2 className="text-xl md:text-3xl font-bold"><span className="text-gray-800">Orders Management</span> </h2>
      </div>

      {/* SUCCESS/ERROR MESSAGES */}
      {successMessage && (
        <div className="mb-4 p-3 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded-lg text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

          {/* Tabs */}
          <div className="flex gap-2 md:gap-4 mb-4 md:mb-6 overflow-x-auto pb-2 cursor-pointer">
            {['All Orders', 'Pending', 'In Progress', 'Completed', 'Cancelled'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-102'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mb-4 md:mb-6">
            <input
              type="text"
              placeholder="Search by order ID or customer name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue -500"
            />
            
          </div>

          {/* Order Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">Order ID</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer Name</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">Service Type</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Status</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Date</th>
                    <th className="px-4 md:px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {currentOrders.map((order, index) => (
                    <tr key={order.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                      <td className="px-4 md:px-6 py-4 text-sm font-semibold text-blue-600 hidden sm:table-cell">ORD#{order.id}</td>
                      <td className="px-4 md:px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <User size={16} />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{order.name}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">{order.service}</td>
                      <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{order.date}</td>
                      <td className="px-4 md:px-6 py-4 text-center">
                        <button 
                          onClick={() => {
                            setSelectedOrder(order);
                            fetch(`http://localhost:8080/api/orders/${order.id}/documents`)
                              .then(res => {
                                if (!res.ok) {
                                  setDocuments([]);
                                  return [];
                                }
                                return res.json();
                              })
                              .then(data => setDocuments(Array.isArray(data) ? data : []))
                              .catch(err => {
                                console.error(err);
                                setDocuments([]);
                              });
                          }}
                          className="inline-flex items-center gap-1 px-2 md:px-4 py-1.5 md:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
                        >
                          <Eye size={15} className="md:w-3.5 md:h-3.5 cursor-pointer" />
                          <span className="hidden md:inline cursor-pointer">View</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-center gap-3">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <span className="px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-lg text-sm font-medium">
                {currentPage}
              </span>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>

          {/* Order Details Modal */}
          {selectedOrder && (() => {
            const displayOrder = orders.find(o => o.id === selectedOrder.id) || selectedOrder;
            return (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 md:p-4" onClick={() => setSelectedOrder(null)}>
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-[95vw] md:max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 md:px-6 py-2 md:py-3 flex items-center justify-between rounded-t-lg">
                  <h3 className="text-sm md:text-lg font-semibold text-white flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                    Order Details
                  </h3>
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="text-white/80 hover:text-white text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-3 md:p-6 overflow-y-auto">
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4 space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Order ID</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">ORD#{displayOrder.id}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Customer Name</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{displayOrder.name}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Mobile</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{displayOrder.mobile || '-'}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Email</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900 break-all">{displayOrder.email || '-'}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Service Type</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{displayOrder.service}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Date</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{displayOrder.date}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Status</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(displayOrder.status)}`}>
                        {displayOrder.status}
                      </span>
                    </div>
                    {displayOrder.extraData && (() => {
                      try {
                        const extra = JSON.parse(displayOrder.extraData);
                        // Separate director keys from regular keys
                        const directorMap = {};
                        const regularEntries = [];
                        Object.entries(extra).forEach(([key, value]) => {
                          if (!value) return;
                          const m = key.match(/^director_(\d+)_(.+)$/);
                          if (m) {
                            const num = m[1];
                            const field = m[2];
                            if (!directorMap[num]) directorMap[num] = {};
                            directorMap[num][field] = value;
                          } else {
                            regularEntries.push([key, value]);
                          }
                        });
                        const hasDirectors = Object.keys(directorMap).length > 0;
                        const hasRegular = regularEntries.length > 0;
                        if (!hasDirectors && !hasRegular) return null;
                        const formatKey = (k) => k.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/\b\w/g, c => c.toUpperCase()).trim();
                        return (
                          <div className="pt-3 border-t">
                            <p className="text-xs md:text-sm text-gray-600 font-medium mb-2">Form Details</p>
                            {hasRegular && (
                              <div className="space-y-1 mb-3">
                                {regularEntries.map(([key, value]) => (
                                  <div key={key} className="flex justify-between items-start gap-2">
                                    <span className="text-xs text-gray-500">{formatKey(key)}</span>
                                    <span className="text-xs font-medium text-gray-800 text-right break-all max-w-[60%]">{String(value)}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {hasDirectors && Object.keys(directorMap).sort().map(num => (
                              <div key={num} className="mb-2 bg-blue-50 rounded-lg p-2">
                                <p className="text-xs font-bold text-blue-700 mb-1">Director / Partner {num}</p>
                                {Object.entries(directorMap[num]).map(([field, val]) => (
                                  <div key={field} className="flex justify-between items-start gap-2">
                                    <span className="text-xs text-gray-500 capitalize">{formatKey(field)}</span>
                                    <span className="text-xs font-medium text-gray-800 text-right break-all max-w-[60%]">{String(val)}</span>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        );
                      } catch { return null; }
                    })()}
                    <div className="pt-3 border-t">
                      <label className="text-xs md:text-sm text-gray-600 font-medium mb-2 block">Update Status</label>
                      <select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-xs md:text-sm"
                      >
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div className="mt-4 w-full">
  <p className="text-sm font-semibold text-gray-700 mb-3">Uploaded Documents</p>
  {(() => {
    console.log('documents:', documents.map(d => d.documentType));
    const directorDocs = {};
    const commonDocs = [];
    documents.forEach(doc => {
      const match = doc.documentType && doc.documentType.match(/_([0-9]+)$/);
      if (match) {
        const num = match[1];
        if (!directorDocs[num]) directorDocs[num] = [];
        directorDocs[num].push(doc);
      } else {
        commonDocs.push(doc);
      }
    });
    const hasGroups = Object.keys(directorDocs).length > 0;
    const DocCard = ({ doc }) => {
      const isPDF = doc.fileName.toLowerCase().endsWith('.pdf');
      const label = doc.documentType ? doc.documentType.replace(/_[0-9]+$/, '').replace(/([A-Z])/g, ' $1').trim() : doc.fileName;
      return (
        <div className="border rounded-lg p-2 bg-white shadow">
          {isPDF ? (
            <div className="w-full h-20 bg-red-50 rounded flex items-center justify-center cursor-pointer hover:bg-red-100 transition" onClick={() => window.open(`http://localhost:8080/uploads/${doc.fileName}`)}>
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"/></svg>
            </div>
          ) : (
            <img src={`http://localhost:8080/uploads/${doc.fileName}`} alt={doc.fileName} className="w-full h-20 object-cover rounded cursor-pointer" onClick={() => window.open(`http://localhost:8080/uploads/${doc.fileName}`)} />
          )}
          <p className="text-xs mt-1 text-gray-500 capitalize truncate">{label}</p>
          <button onClick={() => { fetch(`http://localhost:8080/uploads/${doc.fileName}`).then(r => r.blob()).then(blob => { const url = window.URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = doc.fileName; document.body.appendChild(a); a.click(); window.URL.revokeObjectURL(url); document.body.removeChild(a); }).catch(err => console.error('Download failed:', err)); }} className="block mt-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 rounded w-full">Download</button>
        </div>
      );
    };
    return (
      <>
        {hasGroups ? Object.keys(directorDocs).sort().map(num => (
          <div key={num} className="mb-4">
            <p className="text-xs font-bold text-blue-700 mb-2 bg-blue-50 px-2 py-1 rounded">Director / Partner {num}</p>
            <div className="grid grid-cols-2 gap-2">
              {directorDocs[num].map(doc => <DocCard key={doc.id} doc={doc} />)}
            </div>
          </div>
        )) : null}
        {commonDocs.length > 0 && (
          <div className="mb-2">
            {hasGroups && <p className="text-xs font-bold text-gray-600 mb-2 bg-gray-100 px-2 py-1 rounded">Common Documents</p>}
            <div className="grid grid-cols-2 gap-2">
              {commonDocs.map(doc => <DocCard key={doc.id} doc={doc} />)}
            </div>
          </div>
        )}
      </>
    );
  })()}
</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 border-t flex gap-2 md:gap-3 rounded-b-lg">
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium text-xs md:text-sm transition"
                  >
                    Close
                  </button>
                  <button 
                    onClick={handleUpdateStatus}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-xs md:text-sm transition"
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          ); })()}
    </AdminLayout>
  );
};

export default AdminOrders;

# Validation Template for All Service Forms

## Apply this pattern to ALL remaining service files

### 1. Add to imports (if not present):
```javascript
import { useNavigate } from "react-router-dom";
```

### 2. Add these states after existing states:
```javascript
const navigate = useNavigate();

const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
});

const [errors, setErrors] = useState({ fullName: "", mobile: "" });
```

### 3. Add validation function:
```javascript
const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) 
        newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile)) 
        newErrors.mobile = "Mobile number must be exactly 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
```

### 4. Update handleSubmit (add at start):
```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;  // ADD THIS LINE
    
    // ... rest of your existing validation
};
```

### 5. Replace Full Name input with:
```javascript
<div>
    <label className="block font-bold mb-2">
        Full Name (पूर्ण नाव) <span className="text-red-500">*</span>
    </label>
    <input
        type="text"
        required
        minLength={3}
        value={formData.fullName}
        onChange={(e) => {
            setFormData({...formData, fullName: e.target.value});
            setErrors({...errors, fullName: ""});
        }}
        placeholder="Enter Full Name"
        className={`w-full bg-[#f8faff] p-4 rounded-xl ring-1 ${errors.fullName ? 'ring-red-500' : 'ring-gray-200'} focus:ring-2 focus:ring-[#1e40af]/20`}
    />
    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
</div>
```

### 6. Replace Mobile Number input with:
```javascript
<div>
    <label className="block font-bold mb-2">
        Mobile Number (मोबाईल क्रमांक) <span className="text-red-500">*</span>
    </label>
    <input
        type="tel"
        required
        pattern="[0-9]{10}"
        maxLength={10}
        value={formData.mobile}
        onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            setFormData({...formData, mobile: value});
            setErrors({...errors, mobile: ""});
        }}
        placeholder="Enter 10-digit Mobile Number"
        className={`w-full bg-[#f8faff] p-4 rounded-xl ring-1 ${errors.mobile ? 'ring-red-500' : 'ring-gray-200'} focus:ring-2 focus:ring-[#1e40af]/20`}
    />
    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
</div>
```

---

## Remaining Files to Update (13 files):

1. ✅ ITRForm.jsx
2. ✅ SIPForm.jsx  
3. ✅ Trademark.jsx
4. ✅ GSTForm.jsx
5. ⏳ IECForm.jsx
6. ⏳ Insurance.jsx
7. ⏳ LoanServiceForm.jsx
8. ⏳ MutualFund.jsx
9. ⏳ PublicFinanceService.jsx
10. ⏳ RentAgreementForm.jsx
11. ⏳ Senior.jsx
12. ⏳ VehicleInsurance.jsx
13. ⏳ DMartAccountForm.jsx
14. ⏳ VoterForm.jsx

---

## Quick Copy-Paste Snippets:

### State Declaration:
```javascript
const navigate = useNavigate();
const [formData, setFormData] = useState({ fullName: "", mobile: "" });
const [errors, setErrors] = useState({ fullName: "", mobile: "" });
```

### Validation Function:
```javascript
const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be exactly 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
```

### Submit Check:
```javascript
if (!validateForm()) return;
```

---

## Already Completed (10 files):
1. ✅ Pan.jsx
2. ✅ VoterID.jsx
3. ✅ EShramForm.jsx
4. ✅ AyushmanCardForm.jsx
5. ✅ PassportForm.jsx
6. ✅ RationCardForm.jsx
7. ✅ GazetteForm.jsx
8. ✅ ShopAct.jsx
9. ✅ UdyogAadhaar.jsx
10. ✅ Food.jsx

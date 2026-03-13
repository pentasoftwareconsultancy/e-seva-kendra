# Reusable Form Submission System

## Overview
This system provides a common API function for submitting service applications with file uploads.

## API Function

**Location:** `src/api/formSubmission.js`

```javascript
import { submitApplication } from '../../api/formSubmission';
```

## Usage in Service Forms

### 1. Import the API function
```javascript
import { submitApplication } from "../../api/formSubmission";
```

### 2. Update handleSubmit function
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) return;

    // Check required files
    if (!files.aadhaar || !files.photo) {
        alert("Please upload all required documents");
        return;
    }

    try {
        // Call API
        const response = await submitApplication(
            formData,           // Form data object with fullName
            formData.mobile,    // Mobile number
            "Service Name",     // Service name (e.g., "Ayushman Card")
            files              // Files object
        );

        // Navigate to payment with orderId
        navigate("/payment", {
            state: {
                orderId: response.orderId,
                serviceName: "Service Name",
                applicantName: formData.fullName,
                Amount: 350,
            },
        });
    } catch (error) {
        alert("Failed to submit application. Please try again.");
        console.error(error);
    }
};
```

## API Request Format

**Endpoint:** `POST http://localhost:8080/api/orders/create`

**Content-Type:** `multipart/form-data`

**Fields:**
- `name` - Applicant full name
- `mobile` - Mobile number
- `serviceName` - Service name
- `documents` - Array of uploaded files

## API Response Format

```json
{
  "orderId": "ORD123456",
  "status": "success",
  "message": "Application submitted successfully"
}
```

## Example Services

### Ayushman Card
```javascript
const response = await submitApplication(
    formData,
    formData.mobile,
    "Ayushman Card",
    files
);
```

### PAN Card
```javascript
const serviceName = activeTab === "new" ? "PAN Card - New" : "PAN Card - Update";
const response = await submitApplication(
    formData,
    formData.mobile,
    serviceName,
    files
);
```

### E-Shram Card
```javascript
const response = await submitApplication(
    formData,
    formData.mobile,
    "E-Shram Card",
    files
);
```

### Food License
```javascript
const response = await submitApplication(
    formData,
    formData.mobile,
    "Food License",
    files
);
```

## Required State Structure

### formData
```javascript
const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    // ... other fields
});
```

### files
```javascript
const [files, setFiles] = useState({
    aadhaar: null,
    photo: null,
    // ... other documents
});
```

Each file object should have:
```javascript
{
    file: File,  // The actual file object
    url: string  // Preview URL from URL.createObjectURL()
}
```

## Error Handling

The function throws errors that should be caught:
```javascript
try {
    const response = await submitApplication(...);
    // Success handling
} catch (error) {
    alert("Failed to submit application. Please try again.");
    console.error(error);
}
```

## Installation

Install axios if not already installed:
```bash
npm install axios
```

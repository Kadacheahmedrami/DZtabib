'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Authbutton from "./authbutton";
import Phases from "./phases";

const Signup = () => {
  // State to track the current step, input values, and errors
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    storeName: "",
    employees: "",
    niche: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    storeName: "",
    employees: "",
    niche: "",
    password: "",
    confirmPassword: "",
  });

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const storeNameRegex = /^[a-zA-Z0-9\s]+$/;
  const employeesRegex = /^[0-9]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  // Handler to update input values
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Reset errors on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation function
  const validateForm = () => {
    let valid = true;
    let newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email.";
        valid = false;
      }
    }

    if (step === 2) {
      if (!nameRegex.test(formData.firstName)) {
        newErrors.firstName = "First name can only contain letters.";
        valid = false;
      }
      if (!nameRegex.test(formData.lastName)) {
        newErrors.lastName = "Last name can only contain letters.";
        valid = false;
      }
    }

    if (step === 3) {
      if (!storeNameRegex.test(formData.storeName)) {
        newErrors.storeName = "Store name can only contain letters and numbers.";
        valid = false;
      }
      if (!employeesRegex.test(formData.employees)) {
        newErrors.employees = "Please enter a valid number of employees.";
        valid = false;
      }
      if (formData.niche.trim() === "") {
        newErrors.niche = "Niche cannot be empty.";
        valid = false;
      }
    }

    if (step === 4) {
      if (!passwordRegex.test(formData.password)) {
        newErrors.password = "Password must be at least 6 characters long and contain both letters and numbers.";
        valid = false;
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
        valid = false;
      }
    }

    return valid;
  };

  // Handler to move to the next step
  const handleNextStep = async () => {
    if (validateForm()) {
      if (step === 4) {
        // Sending GET request with form data on the last step
        const requestData = {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          storeName: formData.storeName,
          employees: formData.employees,
          niche: formData.niche,
        };
        console.log(requestData)
        try {
          const response = await fetch('YOUR_API_ENDPOINT_HERE', {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
            },
            // Sending form data as query parameters in GET request
            body: JSON.stringify(requestData),
          });

          const data = await response.json();
          console.log('Response:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      if (step < 4) {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  return (
    <>
      <div className="flex w-full justify-center m-auto h-[650px] md:mt-[60px] mt-[20px] md:w-[594px] p-[55px_41px] flex-col items-center gap-10 rounded-[35px] bg-white shadow-[0px_4px_16px_3px_rgba(37,27,228,0.20)]">
        <div className="t-42-s text-start mr-auto">Sign up</div>
        <div className="t-24-m opacity-[0.6]">
              Log In to Unlock Your Potential. Please enter your info below.
            </div>
        {/* Step 1: Email Input */}
        {step === 1 && (
          <>
           
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

            <div className="flex flex-col h-[10px] items-center w-full gap-5">
              <div className="flex items-center justify-center w-full my-4">
                <hr className="w-full border-t border-gray-300" />
                <span className="absolute bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>
            <Authbutton
              bgColor="white"
              textColor="#251BE4"
              content="Continue with Google"
              imageSrc="/google.svg"
            />
          </>
        )}

        {/* Step 2: Name Inputs */}
        {step === 2 && (
          <>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}

            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
          </>
        )}

        {/* Step 3: Store Information */}
        {step === 3 && (
          <>
            <Input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleInputChange}
              placeholder="Enter your store name"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.storeName && <div className="text-red-500 text-sm">{errors.storeName}</div>}

            <Input
              type="number"
              name="employees"
              value={formData.employees}
              onChange={handleInputChange}
              placeholder="How many employees?"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.employees && <div className="text-red-500 text-sm">{errors.employees}</div>}

            <Input
              type="text"
              name="niche"
              value={formData.niche}
              onChange={handleInputChange}
              placeholder="What is your niche?"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.niche && <div className="text-red-500 text-sm">{errors.niche}</div>}
          </>
        )}

        {/* Step 4: Password Input */}
        {step === 4 && (
          <>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}

            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="h-[64px] t-24-m p-[8px_56px_8px_32px] gap-0 rounded-[6px] border-t border-opacity-0"
            />
            {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
          </>
        )}

        {/* Navigation Buttons */}
        {/* Navigation Buttons */}
      

        <div className="flex w-full justify-between gap-4 mt-8">
          
          <Authbutton
      bgColor="#251BE4"
      textColor="white"
      content="Let's Go"
      onClick={handleNextStep}
    />
 
 
  
    
  </div>
 

      </div>
      <Phases index={3} currentindex={step - 1} />
    </>
  );
};

export default Signup;

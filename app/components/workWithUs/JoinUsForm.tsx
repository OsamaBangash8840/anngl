'use client'
import { useState } from "react";
import { Button, PhoneField, SelectField, TextField, Typography } from "../common"
import { useTranslations } from "next-intl";

export const JoinUsForm = () => {
    const t = useTranslations("common.workWithUs.joinUsForm");
    const [formData, setFormData] = useState({
        companyName: "",
        commercialRegistration: "",
        tgaRegistration: "",
        email: "",
        phone: "",
        cities: null as any,
        address: "",
        services: "",
        fleetNumber: "",
        transactions: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.companyName) newErrors.companyName = "Company Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone Number is required";
        if (!formData.fleetNumber) newErrors.fleetNumber = "Fleet Number is required";
        
        // Add more validations if needed for "each one"
        if (!formData.commercialRegistration) newErrors.commercialRegistration = "Field is required";
        if (!formData.tgaRegistration) newErrors.tgaRegistration = "Field is required";
        if (!formData.cities) newErrors.cities = "Please select at least one city";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.services) newErrors.services = "Services info is required";
        if (!formData.transactions) newErrors.transactions = "Field is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log("Form Submitted Successfully", formData);
            // Add API call logic here
        }
    };

    return (
        <section className="container max-w-[750px] mx-auto mb-8 md:mb-0 my-2 md:my-20  border border-primary-light-400 rounded-[6px]">
            <div className="pt-12">
                <Typography variant="h3" className="!text-primary text-center">{t("title")}</Typography>
                <Typography className="text-center mt-3 !text-navy" >{t("description")}</Typography>
            </div>
            <div className="mt-14 px-4 md:px-10">
                <TextField 
                    label={t("fields.companyName")} 
                    variant="underlined" 
                    labelVariant="bold" 
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    error={errors.companyName}
                />
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                    <TextField 
                        label={t("fields.commercialRegistration")} 
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.commercialRegistration}
                        onChange={(e) => setFormData({ ...formData, commercialRegistration: e.target.value })}
                        error={errors.commercialRegistration}
                    />
                    <TextField 
                        label={t("fields.tgaRegistration")} 
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.tgaRegistration}
                        onChange={(e) => setFormData({ ...formData, tgaRegistration: e.target.value })}
                        error={errors.tgaRegistration}
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                    <TextField 
                        label={t("fields.email")}
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                    />
                    <PhoneField 
                        label={t("fields.phone")}
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.phone}
                        onChange={(phone) => setFormData({ ...formData, phone })}
                        error={errors.phone}
                    />
                </div>
                <SelectField 
                    label={t("fields.cities")}
                    variant="underlined" 
                    labelVariant="bold" 
                    className="mt-4" 
                    value={formData.cities}
                    onChange={(val) => setFormData({ ...formData, cities: val })}
                    error={errors.cities}
                    options={[
                        { value: "riyadh", label: t("cities.riyadh") },
                        { value: "jeddah", label: t("cities.jeddah") },
                        { value: "dammam", label: t("cities.dammam") },
                    ]}
                />
                 <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                    <TextField 
                        label={t("fields.address")}
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        error={errors.address}
                    /> 
                    <TextField 
                        label={t("fields.services")} 
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.services}
                        onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                        error={errors.services}
                    />
                 </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                    <TextField 
                        label={t("fields.fleet")} 
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.fleetNumber}
                        onChange={(e) => setFormData({ ...formData, fleetNumber: e.target.value })}
                        error={errors.fleetNumber}
                    />
                    <TextField 
                        label={t("fields.transactions")}
                        variant="underlined" 
                        labelVariant="bold" 
                        value={formData.transactions}
                        onChange={(e) => setFormData({ ...formData, transactions: e.target.value })}
                        error={errors.transactions}
                    />
                </div>
            </div>  
            <Typography className="!text-[13px] !text-navy my-5 text-center px-4">
                {t("agreement")}
            </Typography>   
            <div className="px-4 md:px-10">
                <Button
                    title={t("submit")}
                    variant="primary"
                    className="!px-14 mt-6 w-full bg-primary text-white mb-10"
                    onClick={handleSubmit}
                />
            </div>
        </section>
    )
}

import React from "react";
import * as Styled from "./style";
export default function CargoInfoForm({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Styled.FormContainer>
            <h2>Cargo Information</h2>
            <Styled.Input
                type="text"
                name="description"
                value={formData.description ?? ""}
                onChange={handleChange}
                placeholder="Cargo Description (e.g., knife, gun)"
            />
            <Styled.Input
                type="number"
                name="weight"
                value={formData.weight ?? 0}
                onChange={handleChange}
                placeholder="Weight (kg)"
            />
            <Styled.Input
                type="number"
                name="width"
                value={formData.width ?? 0}
                onChange={handleChange}
                placeholder="Width (cm)"
            />
            <Styled.Input
                type="number"
                name="height"
                value={formData.height ?? 0}
                onChange={handleChange}
                placeholder="Height (cm)"
            />
        </Styled.FormContainer>
    );
}
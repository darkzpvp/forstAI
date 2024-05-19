import useUsuarioContext from '@/app/hooks/useUsuarioContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const GestionarPlan = ({gestionarPlan, setGestionarPlan, selectedPlan, setSelectedPlan}) => {

    const RouterRedirect = useRouter();
    const { setSuscripcionElegida, suscripcionElegida } = useUsuarioContext();

    const handlePlanChange = async (e) => {
        e.preventDefault();
        await setSuscripcionElegida(selectedPlan)
        RouterRedirect.push("/carrito");
    };

    const handleCancelar = (e) => {
        e.preventDefault();
        setGestionarPlan(!gestionarPlan);
    };

    const handleSelectChange = async(e) => {
        const selectedValue = parseInt(e.target.value);
        setSelectedPlan(selectedValue);
        setSuscripcionElegida(selectedValue)
    };

    return (
        <>
            {gestionarPlan && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
                    onClick={() => setGestionarPlan(false)}
                >
                    <div
                        className="bg-gray-800 p-6 rounded-lg shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form className="text-center">
                            <div className="max-w-sm mx-auto mb-3">
                                <label
                                    htmlFor="countries"
                                    className="block mb-5 text-lg font-medium text-white"
                                >
                                    Selecciona la suscripción
                                </label>
                                <select
                                    id="countries"
                                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                                    value={selectedPlan}
                                    onChange={handleSelectChange}
                                >
                                    <option disabled value="">
                                        Elige la suscripción
                                    </option>
                                    <option value={1}>Plan básico</option>
                                    <option value={2}>Plan estándar</option>
                                    <option value={3}>Plan Premium</option>
                                </select>
                                <div className="mt-3 flex gap-2 justify-center mx-auto">
                                    <button
                                        type='submit'
                                        onClick={(e) => handleCancelar(e)}
                                        className="py-2.5 px-5 text-sm font-medium rounded-lg bg-gray-600 hover:bg-gray-700 border-gray-600 text-gray-300"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={(e) => handlePlanChange(e)}
                                        className="text-white bg-[#5D68CC] hover:bg-[#525cb7] font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default GestionarPlan;

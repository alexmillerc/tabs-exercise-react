import React from "react";

export const Tab = ({
    activeTab,
}) => {
    if (activeTab === "casas")
        return (
            <>
            <div className="tab-item" 
                 style={{background: "green"}}> 
                <h1 className="tab-text">
                    TEXTO CASAS
                </h1>
            </div>
            </>
        );
    if (activeTab === "carros")
        return (
            <>
            <div className="tab-item" 
                 style={{background: "yellow"}}>
                <h1 className="tab-text">
                    TEXTO CARROS
                </h1>
            </div>
            </>
        );
    if (activeTab === "games")
        return (
            <>
            <div className="tab-item"
                 style={{background: "blue"}}> 
                <h1 className="tab-text">
                    TEXTO GAMES
                </h1>
            </div>
            </>
        );
}


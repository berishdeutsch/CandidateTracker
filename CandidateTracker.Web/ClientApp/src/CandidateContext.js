import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandidateContext = createContext();

const CandidateContextComponent = ({ children }) => {
    const [PendingCount, setPendingCount] = useState(0);
    const [ConfirmedCount, setConfirmedCount] = useState(0);
    const [RefusedCount, setRefusedCount] = useState(0);

    const updatePendingCount = async () => {
        const { data } = await axios.get('/api/candidatetracker/getpendingcount');
        setPendingCount(data);
    }
    const updateConfirmedCount = async () => {
        const { data } = await axios.get('/api/candidatetracker/getconfirmedcount');
        setConfirmedCount(data);
 }
    const updateRefusedCount = async () => {
        const { data } = await axios.get('/api/candidatetracker/getrefusedcount');
        setRefusedCount(data);
     }
    
    useEffect(() => {
        updatePendingCount();
        updateConfirmedCount();
        updateRefusedCount();
    }, [])

    return (
        <CandidateContext.Provider value={{ PendingCount, ConfirmedCount, RefusedCount }}>
            {children}
        </CandidateContext.Provider>
    )
}
const useCandidateCount = () => {
    return useContext(CandidateContext);
}

export { CandidateContextComponent, useCandidateCount };

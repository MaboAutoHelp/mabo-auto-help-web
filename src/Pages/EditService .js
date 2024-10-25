import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function EditService() {
    const { id } = useParams(); // الحصول على ID من الـ URL
    const navigate = useNavigate(); // للدلالة على التنقل بعد التحديث
    
    const [serviceName, setServiceName] = useState('');
    const [prix, setPrix] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await Axios.get(`http://localhost:8000/ListService/getListID/${id}`);
                setServiceName(response.data.serviceName);
                setPrix(response.data.prix);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchServiceData();
    }, [id]);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response =  await Axios.put(`http://localhost:8000/ListService/updateList/${id}`, {
                serviceName,
                prix
            });
            if (response.data.message === "list updated successfully") {
                alert(response.data.message);
                navigate('/Main/List'); // العودة إلى صفحة قائمة المشرفين
              } else {
                setMessage(response.data.message);
              }// العودة إلى قائمة الخدمات بعد التحديث
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <p>جارٍ تحميل البيانات...</p>;
    }

    return (
        <div>
            <h2>تحرير الخدمة</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>اسم الخدمة:</label>
                    <input
                        type="text"
                        name="serviceName"
                        value={serviceName}
                        onChange={(e)=> setServiceName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>السعر:</label>
                    <input
                        type="number"
                        name="prix"
                        value={prix}
                        onChange={(e)=> setPrix(e.target.value)}
                        required
                    />
                </div>
                {message && <div className="alert alert-danger">{message}</div>}
                <button type="submit">تحديث</button>
            </form>
        </div>
    );
}

export default EditService;

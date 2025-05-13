import { useState } from 'react';

interface FormData {
  name: string;
  secondName: string;
  phone: string;
  age: string;
  course: string;
}

export default function ApplicationForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        secondName: '',
        phone: '',
        age: '',
        course: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

    const validateDate = (dateStr: string): boolean => {
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!regex.test(dateStr)) return false;
        
        const [day, month, year] = dateStr.split('.');
        const date = new Date(`${year}-${month}-${day}`);
        return !isNaN(date.getTime());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateDate(formData.age)) {
            alert("Iltimos, to'g'ri sana formatini kiriting (DD.MM.YYYY)");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbx5WyQphCDeckYYYgSsjaGmMJaEz7lePLqkidDBrpCFAkrBmNxOVkPWQGwOBGpKzXnc/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            
            if (result.status === "success") {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    secondName: '',
                    phone: '',
                    age: '',
                    course: ''
                });
            } else {
                throw new Error(result.message || 'Failed to submit');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        }
    };

    // JSX qismi o'zgarishsiz qoladi
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Ariza formasi</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ism</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                {/* Second Name */}
                <div>
                    <label htmlFor="secondName" className="block text-sm font-medium text-gray-700">Familiya</label>
                    <input type="text" id="secondName" name="secondName" value={formData.secondName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon raqam</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="+998 __-___-____" required />
                </div>
                {/* Age (Date of Birth) */}
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Tug'ilgan sana (DD.MM.YYYY)</label>
                    <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="25.08.2000" required />
                </div>
                {/* Course Selection */}
                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">Kursni tanlang</label>
                    <select id="course" name="course" value={formData.course} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                        <option value="">-- Tanlang --</option>
                        <option value="RobotoTexnika">RobotoTexnika</option>
                        <option value="Ingliz tili">Ingliz tili</option>
                        <option value="Bolalar uchun rasm">Bolalar uchun rasm</option>
                        <option value="Kattalar uchun rasm">Kattalar uchun rasm</option>
                    </select>
                </div>
                {/* Submit Button */}
                <div>
                    <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                        {isSubmitting ? 'Yuborilmoqda...' : 'Ariza yuborish'}
                    </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                    <div className="p-3 text-sm text-green-700 bg-green-100 rounded-md">
                        Arizangiz muvaffaqiyatli yuborildi!
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                        Xatolik yuz berdi, qayta urinib ko'ring
                    </div>
                )}
            </form>
        </div>
    )
}
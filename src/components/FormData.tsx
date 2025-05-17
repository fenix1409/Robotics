import { useTranslation } from "react-i18next";
import Button from "./Button";

function FormData() {
    const { t } = useTranslation()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbx1jcBGSdXStxl-EubsHgvjXZomEfQiN3TIgngEQgf6N8M-_fg0cUz4STi9Aqtat9P0fA/exec";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: (`Name=${e.target.name.value}&Surname=${e.target.surname.value}&Phone=${e.target.phone.value}&Age=${e.target.age.value}&Course=${e.target.course.value}`)

        }).then(res => res.text()).then(data => {
            alert(data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-[15px] max-sm:flex-col mb-[80px] max-sm:mb-[23px]">
            <input className="w-[230px] py-[15px] pl-[29px] bg-white rounded-[9px] max-sm:w-full" name='name' placeholder={t('Ваше имя')} />
            <input className="w-[230px] py-[15px] pl-[29px] bg-white rounded-[9px] max-sm:w-full" name='surname' placeholder={t('Ваше фамиля')} />
            <input className="w-[230px] py-[15px] pl-[29px] bg-white rounded-[9px] max-sm:w-full" name='phone' placeholder={t('Номер телефона')} />
            <input className="w-[173px] py-[15px] pl-[29px] bg-white rounded-[9px] max-sm:w-full" name='age' placeholder={t('Возраст')} />
            <div className="relative w-[230px] max-sm:w-full">
                <select name="course" className="w-full py-[15px] pl-[29px] pr-[40px] bg-white rounded-[9px] appearance-none focus:outline-none">
                    <option value="robotics">{t('Робототехника')}</option>
                    <option value="english">{t('Английский')}</option>
                    <option value="art">{t('Живопись для детей')}</option>
                    <option value="art-adult">{t('Живопись для взрослых')}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-[15px] pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <Button title={t("получить")} type="submit" extraStyle="max-sm:w-full shadow-[0_5px_15px_15px_rgba(255,224,0,0.4)]" />
        </form>
    )
}

export default FormData
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './img/img1.webp'
const Page = () => {
  return (
    <div className='page'>
            <div>
      <div className="container">
        <div className="header">
          <div className="saya">
            <h1>
            Salom! Men Muhammadqodir.
            Frontend dasturchi va UI/UX dizayner.
            </h1>
            <p>
            Men zamonaviy texnologiyalar yordamida tezkor va chiroyli veb-ilovalar yaratishni yaxshi ko‘raman.
            Frontend dasturlash va UI/UX dizaynga katta qiziqishim bor.
            </p>
          </div>
        </div>
        <div className="gambar">
          <img src={img1} alt="gambar" />
        </div>
        <div className="button">
          <Link to="/portofolio" style={{textDecoration: 'none'}}>
          <button>
                <span>
                Mening Portfoliomni Ko‘rish
                </span>
                <span>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.67678 2.8095H0.690455C0.493223 2.8095 0.333313 2.96942 0.333313 3.16665V4.83331C0.333313 5.03054 0.493223 5.19045 0.690455 5.19045H9.67678V6.56125C9.67678 7.19762 10.4462 7.51631 10.8962 7.06634L13.4574 4.50507C13.7364 4.22611 13.7364 3.77385 13.4574 3.49492L10.8962 0.933645C10.4462 0.483675 9.67678 0.802365 9.67678 1.43873V2.8095Z" fill="#F9FAFB" />
                  </svg>
                </span>
              </button>
          </Link>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Page
import React from 'react';
import Footer from './Footer';
import './Phone.scss';

interface Mobitel {
  ime: any;
  opis: string;
  cijena: string;
  foto: Foto;
  specifikacija: Specifikacija;
  closePhoneItem: () => void;
  addToCart: (ime: string, slika: string, cijena: string) => void;
}

interface Foto {
  prednja: string;
  zadnja: string;
}

interface Specifikacija {
  dimenzija: string;
  težina: string;
  zaslon: string;
  os: string;
  memorija: string;
  fotoaparat: string;
  baterija: string;
}

const Phone: React.FC<Mobitel> = ({
  ime,
  opis,
  cijena,
  foto,
  specifikacija,
  closePhoneItem,
  addToCart,
}) => {
  const front = require(`../img/products/${foto.prednja}.png`);
  const back = require(`../img/products/${foto.zadnja}.png`);
  return (
    <div className="Phone">
      <div className="Phone-left">
        <div className="Phone-left-img">
          <img src={front.default} alt="slika_prednja" />
          <img src={back.default} alt="slika_zadnja" />
        </div>
        <div className="Phone-left-price">
          <button className="Phone-left-price-back " onClick={closePhoneItem}>
            <i className="fas fa-angle-double-left "></i>
            Natrag
          </button>
          <button className="Phone-left-price-amount">{cijena}</button>
          <button
            className="Phone-left-price-buy"
            onClick={() => addToCart(ime, front.default, cijena)}
          >
            Dodaj u košaricu <i className="fas fa-shopping-cart fa-lg"></i>
          </button>
        </div>
      </div>
      <div className="Phone-right">
        <div className="Phone-right-head">
          <h3 className="Phone-right-name">{ime}</h3>
          <p className="Phone-right-description">{opis}</p>
        </div>
        <div className="Phone-right-table">
          <table>
            <tr>
              <td>Dimenzija</td>
              <td>{specifikacija.dimenzija}</td>
            </tr>
            <tr>
              <td>Težina</td>
              <td>{specifikacija.težina}</td>
            </tr>
            <tr>
              <td>Zaslon</td>
              <td>{specifikacija.zaslon}</td>
            </tr>
            <tr>
              <td>OS</td>
              <td>{specifikacija.os}</td>
            </tr>
            <tr>
              <td>Memorija</td>
              <td>{specifikacija.memorija}</td>
            </tr>
            <tr>
              <td>Fotoaparat</td>
              <td>{specifikacija.fotoaparat}</td>
            </tr>
            <tr>
              <td>Baterija</td>
              <td>{specifikacija.baterija}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Phone;

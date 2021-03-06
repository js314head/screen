import React, { Component, ReactElement } from 'react';
import Filter from './Filter';
import Phone from './Phone';
import PhoneCard from './PhoneCard';
import './Phones.scss';

interface State {
  renderItem: boolean;
  itemBrand: string;
  itemVersion: string;
  showAll: boolean;
  samsung: boolean;
  huawei: boolean;
  iphone: boolean;
  xiaomi: boolean;
  lowPrice: boolean;
  mediumPrice: boolean;
  highPrice: boolean;
  megaPrice: boolean;
  showAllPrice: boolean;
}

interface Props {
  addToCart: (ime: string, slika: string, cijena: string) => void;
  filter: string;
}

class Phones extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      renderItem: false,
      itemBrand: '',
      itemVersion: '',
      showAll: true,
      samsung: false,
      huawei: false,
      iphone: false,
      xiaomi: false,
      lowPrice: false,
      mediumPrice: false,
      highPrice: false,
      megaPrice: false,
      showAllPrice: true,
    };
  }

  setSamsung = () => {
    this.setState({ samsung: true, showAll: false });
  };
  setHuawei = () => {
    this.setState({ huawei: true, showAll: false });
  };
  setIphone = () => {
    this.setState({ iphone: true, showAll: false });
  };
  setXiaomi = () => {
    this.setState({ xiaomi: true, showAll: false });
  };

  setLowPrice = () => {
    this.setState({ lowPrice: true, showAllPrice: false });
  };
  setMediumPrice = () => {
    this.setState({ mediumPrice: true, showAllPrice: false });
  };
  setHighPrice = () => {
    this.setState({ highPrice: true, showAllPrice: false });
  };
  setMegaPrice = () => {
    this.setState({ megaPrice: true, showAllPrice: false });
  };

  closeSamsung = () => {
    if (!this.state.huawei && !this.state.iphone && !this.state.xiaomi) {
      this.setState({ samsung: false, showAll: true });
    } else {
      this.setState({ samsung: false });
    }
  };

  closeHuawei = () => {
    if (!this.state.samsung && !this.state.iphone && !this.state.xiaomi) {
      this.setState({ huawei: false, showAll: true });
    } else {
      this.setState({ huawei: false });
    }
  };

  closeIphone = () => {
    if (!this.state.huawei && !this.state.samsung && !this.state.xiaomi) {
      this.setState({ iphone: false, showAll: true });
    } else {
      this.setState({ iphone: false });
    }
  };

  closeXiaomi = () => {
    if (!this.state.huawei && !this.state.iphone && !this.state.samsung) {
      this.setState({ xiaomi: false, showAll: true });
    } else {
      this.setState({ xiaomi: false });
    }
  };

  closeLowPrice = () => {
    if (
      !this.state.mediumPrice &&
      !this.state.highPrice &&
      !this.state.megaPrice
    ) {
      this.setState({ lowPrice: false, showAllPrice: true });
    } else {
      this.setState({ lowPrice: false });
    }
  };

  closeMediumPrice = () => {
    if (
      !this.state.lowPrice &&
      !this.state.highPrice &&
      !this.state.megaPrice
    ) {
      this.setState({ mediumPrice: false, showAllPrice: true });
    } else {
      this.setState({ mediumPrice: false });
    }
  };

  closeHighPrice = () => {
    if (
      !this.state.mediumPrice &&
      !this.state.lowPrice &&
      !this.state.megaPrice
    ) {
      this.setState({ highPrice: false, showAllPrice: true });
    } else {
      this.setState({ highPrice: false });
    }
  };

  closeMegaPrice = () => {
    if (
      !this.state.mediumPrice &&
      !this.state.highPrice &&
      !this.state.lowPrice
    ) {
      this.setState({ megaPrice: false, showAllPrice: true });
    } else {
      this.setState({ megaPrice: false });
    }
  };

  openPhoneItem = (event: React.MouseEvent) => {
    const target = event.target as any;
    const brand = target.parentElement?.id;
    const version = target.parentElement?.firstChild.innerHTML;
    this.setState({ renderItem: true, itemBrand: brand, itemVersion: version });
  };

  closePhoneItem = () => {
    this.setState({ renderItem: false });
  };

  renderCards = () => {
    let phonesCards: ReactElement[] = [];
    let filteredPhonesCards: ReactElement[] = [];

    if (this.state.showAll || this.state.samsung) {
      let keys = Object.keys(phonesBase.samsung);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.samsung[phone].ime}
            foto={phonesBase.samsung[phone].foto.prednja}
            cijena={phonesBase.samsung[phone].cijena}
            openPhoneItem={this.openPhoneItem}
            brand={'samsung'}
          />
        );
      });
    }

    if (this.state.showAll || this.state.huawei) {
      let keys = Object.keys(phonesBase.huawei);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.huawei[phone].ime}
            foto={phonesBase.huawei[phone].foto.prednja}
            cijena={phonesBase.huawei[phone].cijena}
            openPhoneItem={this.openPhoneItem}
            brand={'huawei'}
          />
        );
      });
    }

    if (this.state.showAll || this.state.iphone) {
      let keys = Object.keys(phonesBase.iphone);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.iphone[phone].ime}
            foto={phonesBase.iphone[phone].foto.prednja}
            cijena={phonesBase.iphone[phone].cijena}
            openPhoneItem={this.openPhoneItem}
            brand={'iphone'}
          />
        );
      });
    }

    if (this.state.showAll || this.state.xiaomi) {
      let keys = Object.keys(phonesBase.xiaomi);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.xiaomi[phone].ime}
            foto={phonesBase.xiaomi[phone].foto.prednja}
            cijena={phonesBase.xiaomi[phone].cijena}
            openPhoneItem={this.openPhoneItem}
            brand={'xiaomi'}
          />
        );
      });
    }

    if (this.state.showAllPrice || this.state.lowPrice) {
      let filtered: any = phonesCards.filter((item) =>
        Number(
          item.props.cijena.slice(0, -6).replace(/\s/g, '') > 0 &&
            Number(item.props.cijena.slice(0, -6).replace(/\s/g, '') < 1500)
        )
      );
      filteredPhonesCards.push(filtered);
    }

    if (this.state.showAllPrice || this.state.mediumPrice) {
      let filtered: any = phonesCards.filter((item) =>
        Number(
          item.props.cijena.slice(0, -6).replace(/\s/g, '') > 1500 &&
            Number(item.props.cijena.slice(0, -6).replace(/\s/g, '') < 3000)
        )
      );
      filteredPhonesCards.push(filtered);
    }
    if (this.state.showAllPrice || this.state.highPrice) {
      let filtered: any = phonesCards.filter((item) =>
        Number(
          item.props.cijena.slice(0, -6).replace(/\s/g, '') > 3000 &&
            Number(item.props.cijena.slice(0, -6).replace(/\s/g, '') < 6000)
        )
      );
      filteredPhonesCards.push(filtered);
    }
    if (this.state.showAllPrice || this.state.megaPrice) {
      let filtered: any = phonesCards.filter((item) =>
        Number(item.props.cijena.slice(0, -6).replace(/\s/g, '') > 6000)
      );
      filteredPhonesCards.push(filtered);
    }

    if (this.props.filter) {
      let filtered: any = filteredPhonesCards.reduce(
        (a: any, b: any) => [...a, ...b],
        []
      );
      filteredPhonesCards = filtered.filter((item: any) =>
        item.props.ime.toLowerCase().includes(this.props.filter.toLowerCase())
      );
    }

    return filteredPhonesCards;
  };

  renderContent = () => {
    let returned: ReactElement[] = [];

    if (!this.state.renderItem) {
      returned.push(
        <div className="Phones">
          <Filter
            setSamsung={this.setSamsung}
            setHuawei={this.setHuawei}
            setIphone={this.setIphone}
            setXiaomi={this.setXiaomi}
            closeSamsung={this.closeSamsung}
            closeHuawei={this.closeHuawei}
            closeIphone={this.closeIphone}
            closeXiaomi={this.closeXiaomi}
            setLowPrice={this.setLowPrice}
            setMediumPrice={this.setMediumPrice}
            setHighPrice={this.setHighPrice}
            setMegaPrice={this.setMegaPrice}
            closeLowPrice={this.closeLowPrice}
            closeMediumPrice={this.closeMediumPrice}
            closeHighPrice={this.closeHighPrice}
            closeMegaPrice={this.closeMegaPrice}
          />
          <div className="Phones-items">{this.renderCards()}</div>
        </div>
      );
    } else {
      const brand = this.state.itemBrand;
      const version = this.state.itemVersion;
      let item = Object.keys(phonesBase[brand]);
      let element;
      for (let i = 0; i < item.length; i++) {
        if (phonesBase[brand][item[i]].ime === version) {
          element = phonesBase[brand][item[i]];
        }
      }
      return (
        <Phone
          cijena={element.cijena}
          foto={element.foto}
          ime={element.ime}
          opis={element.opis}
          specifikacija={element.specifikacija}
          closePhoneItem={this.closePhoneItem}
          addToCart={this.props.addToCart}
          key={element.ime}
        />
      );
    }

    return returned;
  };

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default Phones;

const phonesBase = {
  samsung: {
    s20: {
      ime: 'Samsung Galaxy S20 Ultra Dual SIM Cosmic Black',
      opis:
        'Upoznaj Galaxy S20, S20+ i S20 Ultra. Revolucionarnim snimanjem 8K videozapisa mijenjaš način na koji snimaš ne samo videozapise, već i fotografije.1 Dodajte Samsung Knox sigurnost, inteligentnu bateriju, snažni procesor i masovnu pohranu, i Galaxy S20 serija otkriva sasvim novi svijet za mobilne uređaje.',
      cijena: '9 800,00 kn',
      foto: {
        prednja: 's20p',

        zadnja: 's20z',
      },
      specifikacija: {
        dimenzija: '151x71,80x7,90 mm',
        težina: '168 g',
        zaslon: 'Dynamic AMOLED 6.3" , 1080x2280 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 256 GB',
        fotoaparat: '16 MP + 12 MP + 12 MP',
        baterija: 'Li-Ion, 3500 mAh',
      },
    },
    fold: {
      ime: 'Galaxy Fold Black',
      opis:
        'Promijenili smo oblik mobitela, ali i budućnosti. Novina u tehnologiji izrade zaslona: preklopivi Infinity Flex zaslon.Zapanjujući 7,3-inčni Dynamic AMOLED zaslon koji prkosi očekivanjima. Napravljen od tankog fleksibilnog slojevitog polimera, to je najveći zaslon na Galaxy pametnom mobitelu dosad.Zglob čini otvaranje lakim i blagim. Dizajnersko čudo nadahnuto preciznošću mehanizma ručnog sata, zglob se simetrično pomiče kako bi se nježno zaključao. Tako se mobitel Galaxy Fold intuitivno zatvara poput knjige.',
      cijena: '15 199,00 kn',
      foto: {
        prednja: 'foldp',
        zadnja: 'foldz',
      },
      specifikacija: {
        dimenzija: '160,90x117,90x6,90 mm',
        težina: '263 g',
        zaslon:
          'Preklopni Dynamic AMOLED – otvoren / Super AMOLED zatvoren – prednja strana, (1536x2152) / 720x1680 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 12 GB; Interna (ROM): 512 GB',
        fotoaparat: ' 12 MP + 12 MP + 16 MP',
        baterija: '4380 mAh',
      },
    },
    zFlip: {
      ime: 'Galaxy Z Flip Purple Mirror',
      opis:
        'Galaxy Z Flip preklapa se do iznenađujuće male veličine čime se postiže izvanredno dizajnirani telefon koji pristaje u tvoj džep, torbu ili modni dodatak',
      cijena: '11 199,00 kn',
      foto: {
        prednja: 'zflipp',
        zadnja: 'zflipz',
      },
      specifikacija: {
        dimenzija: '167,30x73,60x7,20 mm',
        težina: '183 g',
        zaslon:
          '	Preklopni Dynamic AMOLED – otvoren / Super AMOLED zatvoren – prednja strana, 1080x2636 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 256 GB',
        fotoaparat: '12 MP + 12 MP, autofokus',
        baterija: '	Li-Po, 3300 mAh',
      },
    },
    note10: {
      ime: 'Galaxy Note10 Dual SIM Aura Black',
      opis:
        'Vrlo elegantan nehrđajući čelik i staklo savršeno se stapaju - sve u impresivno tankom dizajnu.',
      cijena: '6 449,00 kn',
      foto: {
        prednja: 'note10p',
        zadnja: 'note10z',
      },
      specifikacija: {
        dimenzija: '151x71,80x7,90 mm',
        težina: '168 g',
        zaslon: 'Dynamic AMOLED 6.3" , 1080x2280 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 256 GB',
        fotoaparat: '16 MP + 12 MP + 12 MP',
        baterija: 'Li-Ion, 3500 mAh',
      },
    },
    s10: {
      ime: 'Galaxy S10 Lite Dual SIM Black',
      opis:
        'Boje iz Magical Prism palete S10 Lite uređaja izgledaju zadivljujuće svaki put kad ih pogledaš. Zahvaljujući uglađenim i zaobljenim rubovima koji omogućuju ergonomsko prijanjanje, S10 Lite predstavlja savršen spoj udobnog ležanja u ruci i oku ugodnog dizajna.',
      cijena: '4 999,00 kn',
      foto: {
        prednja: 's10p',
        zadnja: 's10z',
      },
      specifikacija: {
        dimenzija: '162,50x75,60x8,10 mm',
        težina: '186 g',
        zaslon: 'Super AMOLED 6.7", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 128 GB',
        fotoaparat: '48 MP + 12 MP + 5 MP, autofokus',
        baterija: 'Li-Ion, 4500 mAh',
      },
    },
    a71: {
      ime: 'Galaxy A71 Dual Sim Black',
      opis:
        'Super AMOLED Plus tehnologija prikaza boja, koja se nalazi u podlozi simetrično poravnatog Infinity-O zaslona dijagonale 6,7“, Galaxy A71 uređaju donosi realističan prikaz boja u svemu što gledaš i radiš – od igranja videoigara i gledanja filmova do pregledavanja interneta i obavljanja više zadataka u isto vrijeme. Zaslon ne mora biti prepreka da počneš više uživati u onom što voliš.',
      cijena: '3 399,00 kn',
      foto: {
        prednja: 'a71p',
        zadnja: 'a71z',
      },
      specifikacija: {
        dimenzija: '163,60x76x7,70 mm',
        težina: '179 g',
        zaslon: 'Super AMOLED 6.7", 2400x1080 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat: '64 MP + 12 MP + 5 MP + 5 MP, autofokus',
        baterija: 'Li-Po, 4500 mAh',
      },
    },
    a51: {
      ime: 'Galaxy A51 Dual SIM Black',
      opis:
        'Infinity-O zaslon A51 uređaja optimizira vizualnu simetriju. Sada možeš gejmati, gledati, surfati i multitaskati bez prekida na zaslonu širokog formata dijagonale 6,5“ i FHD+ razlučivosti - a sve to omogućuje ti Super AMOLED tehnologija. Uživaj u iskustvu upotrebe pametnog telefona koji okvir zaslona svodi na najmanju moguću mjeru i daje najviše zaslonskog prostora po svakom inču.',
      cijena: '2 549,00 kn',
      foto: {
        prednja: 'a51p',
        zadnja: 'a51z',
      },
      specifikacija: {
        dimenzija: '163,60x76x7,70 mm',
        težina: '172 g',
        zaslon: 'Super AMOLED kapacitivni dodirnik 6.5", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM): 128 GB',
        fotoaparat: '48 MP + 5 MP+ 5 MP+ 12 MP',
        baterija: 'Li-Po, 4000 mAh',
      },
    },
    a31: {
      ime: 'Galaxy A31 Dual SIM Black',
      opis:
        'Infinity-O zaslon A51 uređaja optimizira vizualnu simetriju. Sada možeš gejmati, gledati, surfati i multitaskati bez prekida na zaslonu širokog formata dijagonale 6,5“ i FHD+ razlučivosti - a sve to omogućuje ti Super AMOLED tehnologija. Uživaj u iskustvu upotrebe pametnog telefona koji okvir zaslona svodi na najmanju moguću mjeru i daje najviše zaslonskog prostora po svakom inču.',
      cijena: '2 199,00 kn',
      foto: {
        prednja: 'a31p',
        zadnja: 'a31z',
      },
      specifikacija: {
        dimenzija: '159,30x73,10x8,60 mm',
        težina: '185 g',
        zaslon: 'Super AMOLED kapacitivni dodirnik 6.4", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM): 64 GB',
        fotoaparat:
          '48 MP + 8 MP + 5 MP + 5 MP, autofokus, optički zoom, digitalni zoom',
        baterija: 'Li-Po, 5000 mAh',
      },
    },
    a10: {
      ime: 'Galaxy A10 Dual SIM Black',
      opis:
        '6,2 inča HD+ zaslona na mobitelu koji voliš gledati. Bez obzira voliš li humoristične serije ili MMORPG igre, Infinity-V zaslon na Galaxy A10 mobitelu mijenja način na koji ih doživljavaš i stavlja te usred akcije. Provjeri kamo će te doživljaj odvesti na v-cut zaslonu.',
      cijena: '1 099,00 kn',
      foto: {
        prednja: 'a10p',
        zadnja: 'a10z',
      },
      specifikacija: {
        dimenzija: '155,60x75,80x8,10 mm',
        težina: '168 g',
        zaslon: 'IPS LCD kapacitativni dodirnik 6.2", 720x1520 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 2 GB; Interna (ROM): 32 GB',
        fotoaparat: '	13 MP, autofokus',
        baterija: '	Li-Ion, 3400 mAh',
      },
    },
  },
  huawei: {
    p40: {
      ime: 'P40 Pro+ Dual SIM Black',
      opis:
        'Govoriš sam s Ultra Vision Leica peterostrukom kamerom snimajući fotografije i videozapise u bilo koje vrijeme i bilo gdje. Revoluciraj svoje iskustvo brzine i snage uz vrhunski Kirin 990 5G čipset. Inovativni dizajn nadograđuje tvoju vizualnu zabavu i ergonomsku udobnost. Istraži sada i budućnost uz HUAWEI P40 Pro +.',
      cijena: '5 449,00 kn',
      foto: {
        prednja: 'p40p',
        zadnja: 'p40z',
      },
      specifikacija: {
        dimenzija: '148,90x71,06x8,50 mm',
        težina: '175 g',
        zaslon: '	OLED 6.1“ , 1080x2340 px',
        os: 'Android 10 bez Google servisa',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 128 GB',
        fotoaparat: '50 MP + 16 MP + 8 MP ',
        baterija: 'Li-Po, 3800 mAh',
      },
    },
    p30: {
      ime: 'P30 Dual SIM Black',
      opis:
        'Jasnije, šire, bliže. Istraži svijet iz nove perspektive. Pronađi još iznenađenja u svijetu koji te okružuje i pretvori ih u dragocjene uspomene. HUAWEI P30 pomiče granice mobilne fotografije.',
      cijena: '3 449,00 kn',
      foto: {
        prednja: 'p30p',
        zadnja: 'p30z',
      },
      specifikacija: {
        dimenzija: '149,10x71,36x7,57 mm',
        težina: '165 g',
        zaslon: '	OLED 6.1“ , 1080x2340 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat: '40 MP + 16 MP + 8 MP, autofokus',
        baterija: 'Li-Po, 3650 mAh',
      },
    },
    p40lite: {
      ime: 'P40 Lite Dual SIM Midnight Black',
      opis:
        'Svijet je pun ljepota koje čekaju da ih otkriješ. S 4 stražnje kamere, HUAWEI P40 lite slika šire, jasnije i bliže nego što si ikad mogao zamisliti. Snimaj kinematografske portrete s bokeh objektivom, a zatim se prebaci na makro objektiv i snimi super detaljne fotografije prirodnih ljepota. Imaš sve mogućnosti na dlanu koristeći isti telefon. Osjećaj je kao da imaš profesionalni foto studio u džepu.',
      cijena: '1 999,00 kn',
      foto: {
        prednja: 'p40litep',
        zadnja: 'p40litez',
      },
      specifikacija: {
        dimenzija: '159,20x76,30x8,70 mm',
        težina: '183 g',
        zaslon: 'LTPS LCD 6.4", 1080x2310 px',
        os: 'Android 10 bez Google servisa',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat: '48 MP + 8 MP + 2 MP+ 2 MP , autofokus',
        baterija: 'Li-Po, 4200 mAh',
      },
    },
    pSmartZ: {
      ime: 'P Smart Z Dual SIM Blue',
      opis:
        'Jedinstveni 6.59-inčni HUAWEI Ultra FullView zaslon pruža iznimno široku sliku. Iskusi neograničenu zabavu tijekom gledanja videozapisa, igranja igara ili čitanja online knjiga, a sve na zaslonu koji gotovo da i nema okvir.',
      cijena: '1 899,00 kn',
      foto: {
        prednja: 'pSmartZp',
        zadnja: 'pSmartZz',
      },
      specifikacija: {
        dimenzija: '163,50x77,30x8,80 mm',
        težina: '196 g',
        zaslon: 'LTPS LCD kapacitivni dodirnik 6.59“, 1080x2340 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM): 64 GB',
        fotoaparat: '16 MP + 2 MP, autofokus',
        baterija: 'Li-Ion, 4000 mAh',
      },
    },
    y6: {
      ime: 'Y6 2019 Dual SIM Black',
      opis:
        'Otkrij novi svijet bez granica na 6,09-inčnom Dewdrop HD+ zaslonu koji ima 87%-tni omjer ekrana u odnosu na kućište i omogućuje kvalitetniji pogled na videozapise, slike i najdraže e-knjige. HUAWEI Y6 2019 također blokira štetno plavo svjetlo i posjeduje TÜV Rheinland certifikat.',
      cijena: '899,00 kn',
      foto: {
        prednja: 'y6p',
        zadnja: 'y6z',
      },
      specifikacija: {
        dimenzija: '156,30x73,50x8 mm',
        težina: '150 g',
        zaslon: 'IPS LCD kapacitativni dodirnik 6.09“ , 720x1560 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 2 GB; Interna (ROM): 32 GB',
        fotoaparat: '13 MP, autofokus',
        baterija: '	Li-Ion, 3020 mAh',
      },
    },
  },
  iphone: {
    12: {
      ime: '12 128GB Black',
      opis:
        '5G brzina. A14 Bionic, najbrži čip u pametnom telefonu. OLED zaslon od ruba do ruba. Keramički štit s četiri puta boljim performansama pada. I noćni način rada na svakoj kameri. iPhone 12 ima sve. Keramički štit. Jasno tvrđi od bilo kojeg stakla pametnog telefona.',
      cijena: '8 649,00 kn',
      foto: {
        prednja: 'iphone12p',
        zadnja: 'iphone12z',
      },
      specifikacija: {
        dimenzija: '146,70x71,50x7,40 mm',
        težina: '164 g',
        zaslon: '	OLED 6,1", 1170 x 2532 px',
        os: 'iOS 14.1',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM):128',
        fotoaparat: '12 MP + 12 MP',
        baterija: '2815 mAh',
      },
    },
    xs: {
      ime: 'XS Max 64 GB Space Gray',
      opis:
        'Najpametniji i najmoćniji čip za pametne telefone. Najnovija generacija Neural Enginea omogućuje fenomenalne doživljaje proširene stvarnosti, prekrasne portrete s kontrolom dubine i velike brzine pri svemu što radiš. Novi senzor pruža bolju kvalitetu slike, vjerniji prikaz boja i smanjuje šum na fotografijama snimljenim pri slabom svjetlu.',
      cijena: '8 649,00 kn',
      foto: {
        prednja: 'xsp',
        zadnja: 'xsz',
      },
      specifikacija: {
        dimenzija: '157,70x77,40x7,70 mm',
        težina: '208 g',
        zaslon: 'OLED 6.1“ , 2688x1242 px, 16M boja',
        os: 'iOS',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM):64 GB',
        fotoaparat: '12 MP + 12 MP, autofokus',
        baterija: 'Li-Ion, 3174 mAh',
      },
    },
    11: {
      ime: '11 64GB Green',
      opis:
        'Potpuno novi sustav dvojne kamere. Prebaci se sa širokokutnog fotkanja na ultraširokokutno. Redizajnirano sučelje koristi novu ultraširokokutnu kameru koja ti prikazuje što se događa izvan okvira — i omogućuje ti da to snimiš. Snimaj i uređuj videozapise jednostavno kao i fotografije. Najpopularnija kamera na svijetu dobila je posve novu perspektivu.',
      cijena: '6 699,00 kn',
      foto: {
        prednja: 'iphone11p',
        zadnja: 'iphone11z',
      },
      specifikacija: {
        dimenzija: '150,90x75,70x8,30 mm',
        težina: '194 g',
        zaslon: 'Liquid Retina LCD',
        os: 'iOS 13',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM):64 GB',
        fotoaparat: '12 MP + 12 MP, autofokus, optički zoom, digitalni zoom',
        baterija: 'Li-Ion, 3110 mAh',
      },
    },
    xr: {
      ime: 'XR 64 GB Product Red',
      opis:
        'Kontrola dubine. Dubinsku oštrinu na portretima sada možeš prilagoditi i kada je fotografija već snimljena. Pametni HDR. Nove sekundarne sličice, brži senzor i moćni čip A12 Bionic izvlače više detalja iz svjetla i sjene na tvojim fotografijama.',
      cijena: '5 699,00 kn',
      foto: {
        prednja: 'xrp',
        zadnja: 'xrz',
      },
      specifikacija: {
        dimenzija: '150,90x75,70x8,30 mm',
        težina: '194 g',
        zaslon: 'IPS LCD kapacitativni dodirnik 6.2", 1792x828 px, 16M boja',
        os: 'iOS',
        memorija: 'Radna (RAM): 3 GB; Interna (ROM): 64 GB',
        fotoaparat: '12 MP, autofokus',
        baterija: 'Li-Ion, 2942 mAh',
      },
    },
    7: {
      ime: '7 32GB Black',
      opis:
        'Temeljitim redizajnom kućišta iPhone 7 je postao prvi iPhone koji se ne boji vode. Više se ne moraš bojati malo prskanja, prolijevanja ili pak prašine. Tipka Home na iPhoneu 7 napredna je čvrsta tipka dizajnirana da bude izdržljiva, responzivna i osjetljiva na dodir.',
      cijena: '3 249,00 kn',
      foto: {
        prednja: 'iphone7p',
        zadnja: 'iphone7z',
      },
      specifikacija: {
        dimenzija: '138,30x67,10x7,10 mm',
        težina: '138 g',
        zaslon: 'IPS kapacitativni dodirnik, 750x1334 px, 16M boja',
        os: 'iOS',
        memorija: 'do 32 GB, 2 GB RAM',
        fotoaparat: '12 MP, autofokus',
        baterija: 'Li-Ion, 1960 mAh',
      },
    },
  },
  xiaomi: {
    mi10: {
      ime: 'Mi 10T Pro Dual SIM Lunar Silver',
      opis:
        'Xiaomi je odigrao istaknutu ulogu u definiranju segmenta kamera od 108MP, a Mi 10T Pro nastavlja to nasljeđe. Uz OIS i podršku za 8K video, Mi 10T Pro postavlja novi standard. Nadovezujući se na našu postojeću tehnologiju, uvrstili smo nove i dinamične značajke softvera za fotografiju, kao što su klonovi za fotografiju i video, načini duge ekspozicije, time-lapse selfie, tempirani prasak i dvostruki videozapis za povišenu kreativnost i privlačnost.',
      cijena: '3 599,00 kn',
      foto: {
        prednja: 'mi10p',
        zadnja: 'mi10z',
      },
      specifikacija: {
        dimenzija: '165,10x76,40x9,30 mm',
        težina: '218 g',
        zaslon: 'IPS LCD 6,67", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 128 GB',
        fotoaparat:
          '108 MP + 13 MP + 5 MP, autofokus, optički zoom, digitalni zoom',
        baterija: '5000 mAh',
      },
    },
    note9: {
      ime: 'Redmi Note 9 Pro Dual SIM White',
      opis:
        'Redmi Note 9 Pro sadrži snažnu četverostruku kameru od 64MP, spremnu za svaku situaciju. Snimi vrlo jasne fotografije pomoću glavne kamere od 64MP. Napravi videozapise u kazališnom stilu izravno sa svog pametnog telefona s 4K rezolucijom. A selfiei su još uzbudljiviji uz selfie slow motion.',
      cijena: '3 599,00 kn',
      foto: {
        prednja: 'note9p',
        zadnja: 'note9z',
      },
      specifikacija: {
        dimenzija: '165,70x76,70x8,80 mm',
        težina: '209 g',
        zaslon: 'IPS LCD 6.67", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat:
          '64 MP + 8 MP + 5 MP + 2 MP, autofokus, optički zoom, digitalni zoom',
        baterija: 'Li-Po, 5020 mAh',
      },
    },
    redmi9a: {
      ime: 'Redmi 9A Dual SIM Black',
      opis:
        'Baterija velikog kapaciteta od 5000mAh napaja Redmi 9A kroz dane korištenja. Naš poseban postupak povećava životni vijek baterije Redmi 9A kako bi se omogućilo optimalno punjenje i ponovno punjenje za godine pouzdane uporabe.',
      cijena: '729,00 kn',
      foto: {
        prednja: 'redmi9ap',
        zadnja: 'redmi9az',
      },
      specifikacija: {
        dimenzija: '164,90x77,07x9 mm',
        težina: '194 g',
        zaslon: 'IPS LCD 6.53", 720x1600 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 2 GB; Interna (ROM): 32 GB',
        fotoaparat: '13 MP, autofokus, optički zoom, digitalni zoom',
        baterija: 'Li-Po, 5020 mAh',
      },
    },
  },
};

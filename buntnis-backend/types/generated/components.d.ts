import type { Schema, Attribute } from '@strapi/strapi';

export interface SeiteninhalteBuntesIlmenau extends Schema.Component {
  collectionName: 'components_seiteninhalte_buntes_ilmenaus';
  info: {
    displayName: 'BuntesIlmenau';
    icon: 'dashboard';
  };
  attributes: {
    content_cards: Attribute.Relation<
      'seiteninhalte.buntes-ilmenau',
      'oneToMany',
      'api::static-content-card.static-content-card'
    >;
  };
}

export interface SeiteninhalteKontakt extends Schema.Component {
  collectionName: 'components_seiteninhalte_kontakts';
  info: {
    displayName: 'Kontakt';
    icon: 'user';
  };
  attributes: {
    adresse: Attribute.Relation<
      'seiteninhalte.kontakt',
      'oneToOne',
      'api::adresse.adresse'
    >;
  };
}

export interface SeiteninhalteStartseite extends Schema.Component {
  collectionName: 'components_seiteninhalte_startseites';
  info: {
    displayName: 'Startseite';
    icon: 'house';
  };
  attributes: {
    content_cards: Attribute.Relation<
      'seiteninhalte.startseite',
      'oneToMany',
      'api::static-content-card.static-content-card'
    >;
  };
}

export interface SeiteninhalteUeberUns extends Schema.Component {
  collectionName: 'components_seiteninhalte_ueber_uns';
  info: {
    displayName: 'UeberUns';
    icon: 'information';
  };
  attributes: {
    content_cards: Attribute.Relation<
      'seiteninhalte.ueber-uns',
      'oneToMany',
      'api::static-content-card.static-content-card'
    >;
  };
}

export interface StrukturSeitenstruktur extends Schema.Component {
  collectionName: 'components_struktur_seitenstrukturs';
  info: {
    displayName: 'Seitenstruktur';
    icon: 'bulletList';
  };
  attributes: {
    Startseite: Attribute.Boolean & Attribute.DefaultTo<true>;
    UeberUns: Attribute.Boolean & Attribute.DefaultTo<true>;
    BuntesIlmenau: Attribute.Boolean & Attribute.DefaultTo<true>;
    Kontakt: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seiteninhalte.buntes-ilmenau': SeiteninhalteBuntesIlmenau;
      'seiteninhalte.kontakt': SeiteninhalteKontakt;
      'seiteninhalte.startseite': SeiteninhalteStartseite;
      'seiteninhalte.ueber-uns': SeiteninhalteUeberUns;
      'struktur.seitenstruktur': StrukturSeitenstruktur;
    }
  }
}

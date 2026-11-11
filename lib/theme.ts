// Оформление 3D-сцены: цвета стола, фишек, карт и надписи на них.
// Цвета страницы (текст, кнопки, фон секций) — в начале app/globals.css.
// Палитра Poker Lounge: чёрный, шампань-золото и графитово-синий, как в логотипе.

export type ChipStyle = {
  base: string;
  inlay: string;
  insert: string;
  value: string;
  /** Цвет номинала и колец. Если не задан — металлическое золото. */
  foil?: string;
};

export const THEME = {
  /** Надпись по кругу на фишках и на картах */
  brand: "POKER LOUNGE",
  /** Знак в центре рубашки карт; пустая строка — пиковая масть */
  monogram: "ПЛ",
  /** Шрифт для монограммы и надписей на картах (системный, рисуется на canvas) */
  serif: `Didot, "Bodoni MT", Georgia, "Times New Roman", serif`,

  /** Знак в центре фишки; font: "serif" — шрифт выше, "brand" — шрифт названия с сайта */
  chipMark: { text: "ПЛ", font: "serif" as "serif" | "brand" },
  /** Логотип, напечатанный на сукне в центре стола */
  tableLogo: {
    monogram: "ПЛ", // знак в круге над названием; пусто — без круга
    title: "POKER LOUNGE",
    sub: "ПОКЕРНЫЙ КЛУБ · КАЛЬЯН-БАР",
    font: "serif" as "serif" | "brand",
  },

  /** Фон сцены: градиент от центра к краям */
  bg: { inner: "#1a2029", outer: "#07080b", focus: [0.62, 0.62] as [number, number] },

  gold: "#d3b384", // шампань — фольга на фишках и картах
  goldMetal: 0xd8bb8c, // инкрустация стола и фаска кнопки
  ivory: "#f1ebdf",

  felt: { color: 0x354253, sheen: 0x8396ae, line: "255,240,215" },
  leather: { color: 0x0b0c0f, sheen: 0x4b5260 },

  chips: [
    { base: "#111216", inlay: "#0a0b0d", insert: "#d3b384", value: "1000" },
    { base: "#465264", inlay: "#353f4d", insert: "#f1ebdf", value: "500" },
    { base: "#c9a978", inlay: "#d6bb90", insert: "#111216", value: "100", foil: "#111216" },
    { base: "#ece6da", inlay: "#f4efe4", insert: "#465264", value: "25", foil: "#2c3644" },
  ] satisfies ChipStyle[],

  card: { face: "#f5f1e8", spade: "#121418", heart: "#a3231f", back: "#111318" },
  allIn: { lacquer: "#121418", text: "#f1ebdf" },
};

export interface NavigationItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

export interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  year?: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Trang Sức",
    href: "/collections",
    dropdownItems: [
      { label: "Dây Chuyền", href: "/collections/day_chuyen_vo_so" },
      { label: "Nhẫn Vỏ Ốc", href: "/collections/nhan_vo_oc" },
      { label: "Vòng Tay", href: "/collections/vong_tay" },
      { label: "Tất Cả Bộ Sưu Tập", href: "/collections" },
    ],
  },
  {
    label: "Đồ Thủ Công",
    href: "/collections",
    dropdownItems: [
      { label: "Phụ Kiện Tóc & Túi", href: "/collections/gio_vo_so" },
      { label: "Phụ Kiện Lifestyle", href: "/collections/guong_vo_so" },
      { label: "Khuyên Tai", href: "/collections/khuyen_tai" },
    ],
  },
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "day_chuyen_vo_so",
    name: "Dây Chuyền",
    tagline: "Chất thơ đại dương trên đôi vai trần gợi cảm",
    description: "Tuyển chọn những mảnh vỏ sò điệp tự nhiên và ngọc trai tươi được mài bóng khảm bạc Ý 925 tạo nên nét kiêu sa, thanh khiết của biển cả.",
    image: "/images/collections/day_chuyen_vo_so/perlee.jpg",
    href: "/collections/day_chuyen_vo_so",
    year: "2026",
  },
  {
    id: "nhan_vo_oc",
    name: "Nhẫn Vỏ Ốc",
    tagline: "Ánh cầu vồng lấp lánh đọng trên ngón tay xinh",
    description: "Nhẫn bạc đính vỏ ốc xà cừ tự nhiên được nghệ nhân cắt gọt khéo léo để bắt trọn từng vệt phản quang đa sắc lung linh như thủy triều ban mai.",
    image: "/images/collections/nhan_vo_oc/nhan_vo_oc.jpg",
    href: "/collections/nhan_vo_oc",
    year: "2026",
  },
  {
    id: "gio_vo_so",
    name: "Phụ Kiện Tóc & Túi",
    tagline: "Giỏ tre bện mây khảm sò biển mộc mạc và hoang sơ",
    description: "Những chiếc túi và giỏ cói dệt tay tự nhiên, đính kết vỏ sò, sao biển sinh động, đưa cả hương vị biển khơi phóng khoáng bên bạn trong mọi chuyến đi.",
    image: "/images/collections/gio_vo_so/alhambra.jpg",
    href: "/collections/gio_vo_so",
    year: "2026",
  },
  {
    id: "guong_vo_so",
    name: "Phụ Kiện Lifestyle",
    tagline: "Khung gương nghệ thuật làm từ ngàn vỏ điệp biển sâu",
    description: "Vật phẩm trang trí nội thất tinh xảo mang hơi thở thanh bình của biển cả vào không gian phòng tắm hay phòng khách thơ mộng của bạn.",
    image: "/images/collections/guong_vo_so/guong_vo_so.jpg",
    href: "/collections/guong_vo_so",
    year: "2027",
  },
  {
    id: "khuyen_tai",
    name: "Khuyên Tai",
    tagline: "Ánh xà cừ lung linh đung đưa bên khóe mắt",
    description: "Những đôi khuyên tai thủ công kết từ vỏ điệp, ngọc trai và xà cừ tự nhiên — nhẹ nhàng, tinh tế, mang cả đại dương theo từng bước đi.",
    image: "/images/collections/khuyen_tai/khuyen_tai.jpg",
    href: "/collections/khuyen_tai",
    year: "2027",
  },
  {
    id: "vong_tay",
    name: "Vòng Tay",
    tagline: "Nhịp điệu sóng vỗ dịu êm bện chặt cổ tay",
    description: "Vòng bện dây thủ công đính mảnh xà cừ tròn và ngọc trai tươi thuần khiết, biểu tượng cho năng lượng tích cực và sự bình an từ khơi xa.",
    image: "/images/collections/vong_tay/vong_tay.jpg",
    href: "/collections/vong_tay",
    year: "2026",
  },
];

export const BRAND_INFO = {
  name: "Rì Rào Store",
  tagline: "Premium Artisanal Seashell Jewelry since 2026",
  founded: "2026",
  place: "Vietnam",
  footerQuote: "Kể từ năm 2026, Rì Rào Store đã kết hợp sự tinh hoa, chất thơ và thiên nhiên trong các bộ sưu tập trang sức vỏ sò và ngọc trai thủ công độc bản.",
};

// Base64 Solid Color Placeholders for Next.js Image Component
// Warm Cream (#FAF6F0)
export const CREAM_BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGQUY2RjAiLz48L3N2Zz4=";

// Deep sea navy (#1B2A30)
export const CHARCOAL_BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxQjJBMzAiLz48L3N2Zz4=";


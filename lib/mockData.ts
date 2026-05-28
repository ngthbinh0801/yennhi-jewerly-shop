import { SITE_IMAGES } from "@/lib/imageConfig";

export interface CollectionTheme {
  heroBg: string;
  heroText: string;
  heroMuted: string;
  dark?: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  heroImage?: string;
  itemCount: number;
  category: "necklaces" | "bracelets" | "earrings" | "rings" | "watches";
  theme: CollectionTheme;
}

export interface Product {
  slug: string;
  name: string;
  collectionSlug: string;
  material: string;
  price: string;
  description: string;
  images: string[];
  specifications: {
    materials: string;
    dimensions: string;
    reference: string;
  };
  featured?: boolean;
}

export interface Boutique {
  name: string;
  city: string;
  region: "North" | "Central" | "South";
  address: string;
  phone: string;
  hours: string[];
  coordinates: { lat: number; lng: number };
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

// 6 Seashell Collections
export const COLLECTIONS_DATA: Collection[] = [
  {
    slug: "day_chuyen_vo_so",
    name: "Dây Chuyền Vỏ Sò",
    tagline: "Chất thơ đại dương trên đôi vai trần gợi cảm",
    description: "Tuyển chọn những mảnh vỏ sò điệp tự nhiên và ngọc trai tươi được mài bóng khảm bạc Ý 925 tạo nên nét kiêu sa, thanh khiết của biển cả.",
    image: SITE_IMAGES.collections.editorial_day_chuyen,
    heroImage: SITE_IMAGES.collections.day_chuyen_hero,
    itemCount: 6,
    category: "necklaces",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "nhan_vo_oc",
    name: "Nhẫn Vỏ Ốc",
    tagline: "Ánh cầu vồng lấp lánh đọng trên ngón tay xinh",
    description: "Nhẫn bạc đính vỏ ốc xà cừ tự nhiên được nghệ nhân cắt gọt khéo léo để bắt trọn từng vệt phản quang đa sắc lung linh như thủy triều ban mai.",
    image: SITE_IMAGES.collections.nhan_editorial,
    heroImage: SITE_IMAGES.collections.nhan,
    itemCount: 4,
    category: "rings",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "gio_vo_so",
    name: "Giỏ Vỏ Sò",
    tagline: "Giỏ tre bện mây khảm sò biển mộc mạc và hoang sơ",
    description: "Những chiếc túi và giỏ cói dệt tay tự nhiên, đính kết vỏ sò, sao biển sinh động, đưa cả hương vị biển khơi phóng khoáng bên bạn trong mọi chuyến đi.",
    image: SITE_IMAGES.collections.tui_xach_editorial,
    heroImage: SITE_IMAGES.collections.tui_xach,
    itemCount: 4,
    category: "necklaces",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "guong_vo_so",
    name: "Gương Đính Vỏ Sò",
    tagline: "Khung gương nghệ thuật làm từ ngàn vỏ điệp biển sâu",
    description: "Vật phẩm trang trí nội thất tinh xảo mang hơi thở thanh bình của biển cả vào không gian phòng tắm hay phòng khách thơ mộng của bạn.",
    image: SITE_IMAGES.collections.guong_editorial,
    heroImage: SITE_IMAGES.collections.guong,
    itemCount: 5,
    category: "rings",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "khuyen_tai",
    name: "Khuyên Tai Vỏ Sò",
    tagline: "Ánh xà cừ lung linh đung đưa bên khóe mắt",
    description: "Những đôi khuyên tai thủ công kết từ vỏ điệp, ngọc trai và xà cừ tự nhiên — nhẹ nhàng, tinh tế, mang cả đại dương theo từng bước đi.",
    image: SITE_IMAGES.collections.khuyen_tai_editorial,
    heroImage: SITE_IMAGES.collections.khuyen_tai,
    itemCount: 6,
    category: "earrings",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "vong_tay",
    name: "Vòng Tay Vỏ Sò",
    tagline: "Nhịp điệu sóng vỗ dịu êm bện chặt cổ tay",
    description: "Vòng bện dây thủ công đính mảnh xà cừ tròn và ngọc trai tươi thuần khiết, biểu tượng cho năng lượng tích cực và sự bình an từ khơi xa.",
    image: SITE_IMAGES.collections.vong_tay_editorial,
    heroImage: SITE_IMAGES.collections.vong_tay,
    itemCount: 4,
    category: "bracelets",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
];

// 36 sản phẩm — 6 sản phẩm × 6 bộ sưu tập
export const PRODUCTS_DATA: Product[] = [

  // ── DÂY CHUYỀN VỎ SÒ ──────────────────────────────────────
  { slug: "day_chuyen_vo_so-001", name: "Dây Chuyền Vỏ Sò Điệp", collectionSlug: "day_chuyen_vo_so", material: "Vỏ sò điệp tự nhiên, Ngọc trai nước ngọt, Bạc Ý 925", price: "850.000 VND", description: "Kết từ những mảnh vỏ sò điệp tự nhiên và hạt ngọc trai nước ngọt khảm bạc Ý 925 bền màu. Mỗi chiếc sò điệp được chọn lọc thủ công, đánh bóng nhẹ để giữ nguyên vân màu xà cừ lung linh.", images: [SITE_IMAGES.collections.day_chuyen_1], specifications: { materials: "Vỏ sò điệp tự nhiên, Ngọc trai nước ngọt, Bạc Ý 925", dimensions: "Sò điệp 18mm, Dài 42cm (±3cm)", reference: "RRS-DC-001" }, featured: true },
  { slug: "day_chuyen_vo_so-002", name: "Dây Chuyền Ngọc Trai Chuỗi", collectionSlug: "day_chuyen_vo_so", material: "Ngọc trai nước ngọt, Vỏ sò điệp nhỏ, Bạc Ý 925", price: "1.100.000 VND", description: "Chuỗi ngọc trai nước ngọt xếp đều xen kẽ vỏ sò điệp nhỏ tạo nhịp điệu nhẹ nhàng như sóng biển. Khóa bạc 925 chắc chắn, dây có thể chỉnh dài ngắn theo sở thích.", images: [SITE_IMAGES.collections.day_chuyen_2], specifications: { materials: "Ngọc trai nước ngọt 6mm, Sò điệp 10mm, Bạc Ý 925", dimensions: "Dài 45cm (có thể điều chỉnh)", reference: "RRS-DC-002" }, featured: false },
  { slug: "day_chuyen_vo_so-003", name: "Dây Chuyền Xà Cừ Thả", collectionSlug: "day_chuyen_vo_so", material: "Mặt xà cừ oval, Dây vàng 14K, Bạc Ý 925", price: "720.000 VND", description: "Mặt dây chuyền xà cừ oval tự nhiên được cắt gọt tinh xảo, treo trên dây vàng mảnh 14K. Ánh xà cừ đổi màu từ trắng ngà sang hồng phấn, rất hợp với trang phục mùa hè.", images: [SITE_IMAGES.collections.day_chuyen_3], specifications: { materials: "Xà cừ oval 20×14mm, Dây vàng 14K, Bạc Ý 925", dimensions: "Mặt dây 20×14mm, Dây dài 40cm", reference: "RRS-DC-003" }, featured: false },
  { slug: "day_chuyen_vo_so-004", name: "Dây Chuyền Sao Biển Vàng", collectionSlug: "day_chuyen_vo_so", material: "Sao biển nhỏ mạ vàng, Hạt vỏ sò, Dây bạc 925", price: "680.000 VND", description: "Charm sao biển được mạ vàng tỉ mỉ treo cùng chuỗi hạt vỏ sò nhỏ xinh. Thiết kế nhẹ nhàng, nữ tính, gợi lên hình ảnh bãi biển lúc bình minh.", images: [SITE_IMAGES.collections.day_chuyen_4], specifications: { materials: "Sao biển mạ vàng 14K, Hạt vỏ sò 4mm, Dây bạc 925", dimensions: "Charm 15mm, Dây dài 38cm (±2cm)", reference: "RRS-DC-004" }, featured: false },
  { slug: "day_chuyen_vo_so-005", name: "Dây Chuyền Vỏ Ốc Mini Pastel", collectionSlug: "day_chuyen_vo_so", material: "Vỏ ốc nhỏ nhuộm màu pastel, Dây bện linen", price: "590.000 VND", description: "Những chiếc vỏ ốc nhỏ được nhuộm màu pastel nhẹ nhàng — hồng, xanh mint, tím lavender — kết thành chuỗi dây bện linen thủ công. Phong cách bohemian duyên dáng.", images: [SITE_IMAGES.collections.day_chuyen_5], specifications: { materials: "Vỏ ốc nhỏ nhuộm pastel, Dây linen tự nhiên, Khóa gỗ", dimensions: "Dài 42–50cm (điều chỉnh được)", reference: "RRS-DC-005" }, featured: false },
  { slug: "day_chuyen_vo_so-006", name: "Dây Chuyền Mặt Vỏ Điệp Lớn", collectionSlug: "day_chuyen_vo_so", material: "Vỏ điệp lớn nguyên chiếc, Dây bạc 925 mạ vàng", price: "950.000 VND", description: "Một chiếc vỏ điệp nguyên chiếc được chọn lọc kỹ lưỡng, đánh bóng hai mặt và khảm bạc cẩn thận. Tạo điểm nhấn táo bạo, sang trọng cho bộ trang phục tối giản.", images: [SITE_IMAGES.collections.day_chuyen_6], specifications: { materials: "Vỏ điệp tự nhiên 35–40mm, Bạc 925 mạ vàng", dimensions: "Mặt dây 35–40mm, Dây dài 45cm", reference: "RRS-DC-006" }, featured: true },

  // ── NHẪN VỎ ỐC ────────────────────────────────────────────
  { slug: "nhan_vo_oc-001", name: "Nhẫn Xà Cừ Ngũ Sắc", collectionSlug: "nhan_vo_oc", material: "Vỏ ốc xà cừ ngũ sắc, Bạc Ý 925 mạ rhodium", price: "650.000 VND", description: "Nhẫn bạc 925 mạ rhodium đính mảnh xà cừ ngũ sắc cắt và mài thủ công. Lớp xà cừ đổi màu theo ánh sáng từ trắng ngà sang hồng phấn và xanh biển.", images: [SITE_IMAGES.collections.nhan_1], specifications: { materials: "Xà cừ ngũ sắc, Bạc Ý 925 mạ rhodium", dimensions: "Mặt nhẫn 14×10mm, Size: 5–9", reference: "RRS-NH-001" }, featured: true },
  { slug: "nhan_vo_oc-002", name: "Nhẫn Vỏ Điệp Trắng", collectionSlug: "nhan_vo_oc", material: "Vỏ điệp trắng ngà, Bạc Ý 925", price: "520.000 VND", description: "Mảnh vỏ điệp trắng ngà tinh khiết được gắn trên đế bạc 925 tối giản. Vẻ đẹp thuần khiết của biển đọng lại trên từng đường vân tự nhiên của vỏ điệp.", images: [SITE_IMAGES.collections.nhan_2], specifications: { materials: "Vỏ điệp trắng ngà, Bạc Ý 925", dimensions: "Mặt nhẫn 12×8mm, Size: 5–9", reference: "RRS-NH-002" }, featured: false },
  { slug: "nhan_vo_oc-003", name: "Nhẫn Sao Biển Bạc", collectionSlug: "nhan_vo_oc", material: "Sao biển nhỏ, Bạc Ý 925, Mạ vàng 14K", price: "480.000 VND", description: "Charm sao biển nhỏ xinh được đúc từ bạc 925 và mạ vàng 14K nhẹ nhàng. Chiếc nhẫn mang vẻ đẹp biển cả tinh tế, phù hợp đeo hàng ngày.", images: [SITE_IMAGES.collections.nhan_3], specifications: { materials: "Bạc Ý 925, Mạ vàng 14K", dimensions: "Charm sao biển 10mm, Size: 5–9", reference: "RRS-NH-003" }, featured: false },
  { slug: "nhan_vo_oc-004", name: "Nhẫn Xà Cừ Đen Huyền", collectionSlug: "nhan_vo_oc", material: "Vỏ ốc xà cừ đen, Bạc Ý 925 xi đen", price: "580.000 VND", description: "Mảnh xà cừ đen ánh tím huyền bí được gắn trên đế bạc 925 xi đen tạo nên sự tương phản độc đáo. Phong cách tối giản mà đầy cá tính.", images: [SITE_IMAGES.collections.nhan_4], specifications: { materials: "Xà cừ đen, Bạc Ý 925 xi đen", dimensions: "Mặt nhẫn 12×9mm, Size: 5–9", reference: "RRS-NH-004" }, featured: false },

  // ── GIỎ VỎ SÒ ─────────────────────────────────────────────
  { slug: "gio_vo_so-001", name: "Giỏ Cói Khảm Sò Lớn", collectionSlug: "gio_vo_so", material: "Cói dệt tay tự nhiên, Vỏ sò biển, Sao biển nhỏ", price: "1.200.000 VND", description: "Giỏ cói dệt tay từ sợi cói tự nhiên không tẩy màu, đính kết vỏ sò biển và sao biển theo hoa văn sóng nước thủ công. Phù hợp đi biển, dã ngoại hoặc làm quà đặc sắc.", images: [SITE_IMAGES.collections.tui_xach_1], specifications: { materials: "Cói tự nhiên, Vỏ sò biển, Sao biển nhỏ", dimensions: "28×22×12cm, Quai dài 35cm", reference: "RRS-GI-001" }, featured: true },
  { slug: "gio_vo_so-002", name: "Giỏ Cói Khảm Sò Nhỏ", collectionSlug: "gio_vo_so", material: "Cói dệt tay tự nhiên, Vỏ sò nhỏ, Hạt gỗ", price: "850.000 VND", description: "Phiên bản nhỏ gọn của dòng giỏ cói khảm sò, tiện lợi cho buổi đi dạo hay cafe. Vỏ sò được sắp xếp thưa thoáng, điểm xuyết hạt gỗ tự nhiên.", images: [SITE_IMAGES.collections.tui_xach_2], specifications: { materials: "Cói tự nhiên, Vỏ sò nhỏ, Hạt gỗ", dimensions: "20×16×8cm, Quai dài 28cm", reference: "RRS-GI-002" }, featured: false },
  { slug: "gio_vo_so-003", name: "Túi Đeo Chéo Vỏ Sò", collectionSlug: "gio_vo_so", material: "Vải canvas tự nhiên, Dây cói bện, Vỏ sò trang trí", price: "980.000 VND", description: "Túi đeo chéo phong cách boho với thân vải canvas tự nhiên, dây đeo bện từ cói và trang trí vỏ sò biển dọc theo nắp túi. Nhẹ nhàng, bền bỉ cho mọi hành trình.", images: [SITE_IMAGES.collections.tui_xach_3], specifications: { materials: "Vải canvas, Cói bện, Vỏ sò biển", dimensions: "24×18×6cm, Dây đai dài 60–110cm", reference: "RRS-GI-003" }, featured: false },
  { slug: "gio_vo_so-004", name: "Giỏ Tròn Sao Biển", collectionSlug: "gio_vo_so", material: "Cói đan tròn, Sao biển khô tự nhiên, Dây da lộn", price: "1.050.000 VND", description: "Giỏ hình tròn đan từ cói thô tự nhiên, trang trí sao biển khô nguyên chiếc và buộc nơ dây da lộn. Kiểu dáng độc đáo, là phụ kiện thời trang nổi bật.", images: [SITE_IMAGES.collections.tui_xach_4], specifications: { materials: "Cói đan, Sao biển tự nhiên, Dây da lộn", dimensions: "Đường kính 26cm × Sâu 10cm, Quai dài 30cm", reference: "RRS-GI-004" }, featured: false },

  // ── GƯƠNG ĐÍNH VỎ SÒ ──────────────────────────────────────
  { slug: "guong_vo_so-001", name: "Gương Tay Khảm Vỏ Điệp", collectionSlug: "guong_vo_so", material: "Khung gỗ thông sơn mài, Vỏ điệp biển, Kính gương bạc", price: "950.000 VND", description: "Gương tay với khung gỗ thông được khảm kín vỏ điệp biển nhỏ tạo hoa văn vảy cá. Kính gương bạc độ phản chiếu cao, phù hợp trang trí bàn phấn.", images: [SITE_IMAGES.collections.guong_1], specifications: { materials: "Gỗ thông sơn mài, Vỏ điệp biển, Kính bạc", dimensions: "Dài 28cm, Mặt gương Ø14cm", reference: "RRS-GU-001" }, featured: true },
  { slug: "guong_vo_so-002", name: "Gương Tường Tròn Vỏ Sò", collectionSlug: "guong_vo_so", material: "Khung gỗ MDF sơn trắng, Vỏ sò đa dạng, Kính gương", price: "1.850.000 VND", description: "Gương tường tròn có khung gỗ sơn trắng, quanh viền đính kết các loại vỏ sò đa dạng theo lớp đồng tâm. Trang trí phòng ngủ hay phòng tắm thêm phần tươi mát.", images: [SITE_IMAGES.collections.guong_2], specifications: { materials: "Gỗ MDF, Vỏ sò tự nhiên, Kính gương", dimensions: "Ø50cm, Móc treo kèm theo", reference: "RRS-GU-002" }, featured: false },
  { slug: "guong_vo_so-003", name: "Gương Bàn Phấn Biển", collectionSlug: "guong_vo_so", material: "Đế gỗ tự nhiên, Vỏ điệp trắng, Kính hai chiều", price: "1.200.000 VND", description: "Gương bàn phấn đứng với đế gỗ ổn định, mặt kính hai chiều (thường và phóng đại). Viền gương được khảm vỏ điệp trắng mịn, tao nhã trên bàn trang điểm.", images: [SITE_IMAGES.collections.guong_3], specifications: { materials: "Gỗ tự nhiên, Vỏ điệp trắng, Kính hai chiều", dimensions: "Mặt gương 18×18cm, Đế 15×10cm", reference: "RRS-GU-003" }, featured: false },
  { slug: "guong_vo_so-004", name: "Gương Oval Khảm Trai", collectionSlug: "guong_vo_so", material: "Khung gỗ óc chó, Xà cừ khảm, Kính gương bạc", price: "1.400.000 VND", description: "Gương hình oval sang trọng với khung gỗ óc chó được khảm xà cừ nghệ thuật. Đường viền khảm trai tạo cảm giác như một tác phẩm nghệ thuật treo tường.", images: [SITE_IMAGES.collections.guong_4], specifications: { materials: "Gỗ óc chó, Xà cừ tự nhiên, Kính gương bạc", dimensions: "60×40cm, Có thể treo dọc hoặc ngang", reference: "RRS-GU-004" }, featured: false },
  { slug: "guong_vo_so-005", name: "Gương Mini Móc Chìa Khóa", collectionSlug: "guong_vo_so", material: "Vỏ điệp nguyên chiếc, Kính mini, Móc inox", price: "380.000 VND", description: "Chiếc vỏ điệp nguyên chiếc được khoét nhẹ và gắn kính gương mini bên trong, thêm móc inox để đeo túi xách. Món phụ kiện nhỏ xinh và thực dụng.", images: [SITE_IMAGES.collections.guong_5], specifications: { materials: "Vỏ điệp tự nhiên, Kính mini, Móc inox 304", dimensions: "Vỏ điệp 6–8cm, Kính 3cm", reference: "RRS-GU-005" }, featured: false },

  // ── HỘP ĐỰNG TRANG SỨC ────────────────────────────────────
  { slug: "khuyen_tai-001", name: "Khuyên Tai Vỏ Điệp Thả", collectionSlug: "khuyen_tai", material: "Vỏ điệp tự nhiên, Móc bạc 925", price: "420.000 VND", description: "Đôi khuyên tai thả với mảnh vỏ điệp tự nhiên được mài bóng nhẹ, treo trên móc bạc 925 mảnh mai. Ánh xà cừ lung linh đung đưa theo từng chuyển động.", images: [SITE_IMAGES.collections.khuyen_tai_1], specifications: { materials: "Vỏ điệp tự nhiên, Bạc 925", dimensions: "Mảnh điệp 25mm, Dài tổng 45mm", reference: "RRS-KT-001" }, featured: true },
  { slug: "khuyen_tai-002", name: "Khuyên Tai Ngọc Trai Tròn", collectionSlug: "khuyen_tai", material: "Ngọc trai nước ngọt 8mm, Chốt vàng 14K", price: "580.000 VND", description: "Hạt ngọc trai nước ngọt tròn mọng óng ánh trắng hồng, gắn trên chốt vàng 14K tinh tế. Kiểu dáng cổ điển, sang trọng, phù hợp mọi dịp.", images: [SITE_IMAGES.collections.khuyen_tai_2], specifications: { materials: "Ngọc trai nước ngọt 8mm, Vàng 14K", dimensions: "Ø8mm, Chốt dài 12mm", reference: "RRS-KT-002" }, featured: false },
  { slug: "khuyen_tai-003", name: "Khuyên Tai Xà Cừ Oval", collectionSlug: "khuyen_tai", material: "Xà cừ oval tự nhiên, Bạc Ý 925 mạ vàng", price: "490.000 VND", description: "Mảnh xà cừ oval được cắt gọt tinh xảo, khung bạc 925 mạ vàng bao viền mỏng. Màu sắc đổi chiều từ trắng ngà sang xanh nhạt tùy góc ánh sáng.", images: [SITE_IMAGES.collections.khuyen_tai_3], specifications: { materials: "Xà cừ oval 18×12mm, Bạc 925 mạ vàng", dimensions: "18×12mm, Móc dài 10mm", reference: "RRS-KT-003" }, featured: false },
  { slug: "khuyen_tai-004", name: "Khuyên Tai Vỏ Sò Mini Cụm", collectionSlug: "khuyen_tai", material: "Vỏ sò nhỏ tự nhiên, Dây bạc 925", price: "350.000 VND", description: "Ba chiếc vỏ sò nhỏ xinh kết thành cụm, treo trên móc bạc 925 mảnh mai. Phong cách boho nhẹ nhàng, thích hợp đi biển hay dạo phố mùa hè.", images: [SITE_IMAGES.collections.khuyen_tai_4], specifications: { materials: "Vỏ sò nhỏ tự nhiên, Bạc 925", dimensions: "Cụm 20mm, Tổng dài 35mm", reference: "RRS-KT-004" }, featured: false },
  { slug: "khuyen_tai-005", name: "Khuyên Tai Hoa Biển Mạ Vàng", collectionSlug: "khuyen_tai", material: "Hoa biển mạ vàng 14K, Chốt bạc 925", price: "460.000 VND", description: "Charm hoa biển tinh xảo được mạ vàng 14K tỉ mỉ, bề mặt có hoa văn nổi mô phỏng san hô. Nhỏ nhắn, sang trọng, điểm nhấn tinh tế cho đôi tai.", images: [SITE_IMAGES.collections.khuyen_tai_5], specifications: { materials: "Hoa biển mạ vàng 14K, Bạc 925", dimensions: "Ø14mm, Chốt dài 10mm", reference: "RRS-KT-005" }, featured: false },
  { slug: "khuyen_tai-006", name: "Khuyên Tai Chuỗi Sao Biển", collectionSlug: "khuyen_tai", material: "Sao biển nhỏ mạ vàng, Hạt xà cừ, Móc bạc 925", price: "530.000 VND", description: "Chuỗi thả gồm sao biển mạ vàng và hạt xà cừ nhỏ xếp xen kẽ. Nhẹ nhàng đung đưa, tạo chuyển động duyên dáng, gợi lên cảm giác biển trong từng khoảnh khắc.", images: [SITE_IMAGES.collections.khuyen_tai_6], specifications: { materials: "Sao biển mạ vàng, Xà cừ 4mm, Bạc 925", dimensions: "Tổng dài 55mm", reference: "RRS-KT-006" }, featured: true },

  // ── VÒNG TAY VỎ SÒ ────────────────────────────────────────
  { slug: "vong_tay-001", name: "Vòng Bện Xà Cừ Tròn", collectionSlug: "vong_tay", material: "Dây linen bện thủ công, Xà cừ tròn 8mm, Ngọc trai 4mm", price: "480.000 VND", description: "Vòng tay bện dây thủ công kết hợp mảnh xà cừ tròn đánh bóng và hạt ngọc trai nước ngọt thuần khiết. Dây linen tự nhiên bền màu, khóa điều chỉnh 14–19cm.", images: [SITE_IMAGES.collections.vong_tay_1], specifications: { materials: "Linen tự nhiên, Xà cừ tròn 8mm, Ngọc trai 4mm", dimensions: "Điều chỉnh 14–19cm", reference: "RRS-VT-001" }, featured: true },
  { slug: "vong_tay-002", name: "Vòng Charm Sao Biển", collectionSlug: "vong_tay", material: "Chuỗi bạc 925, Charm sao biển mạ vàng, Vỏ sò nhỏ", price: "380.000 VND", description: "Vòng tay chuỗi bạc 925 mảnh mai với charm sao biển mạ vàng 14K và vỏ sò nhỏ xen kẽ. Nhẹ nhàng, nữ tính, phù hợp đeo hàng ngày hay đi biển.", images: [SITE_IMAGES.collections.vong_tay_2], specifications: { materials: "Bạc Ý 925, Charm mạ vàng 14K, Vỏ sò nhỏ", dimensions: "Dài 16–18cm, Khóa cá hồi", reference: "RRS-VT-002" }, featured: false },
  { slug: "vong_tay-003", name: "Vòng Chuỗi Ngọc Trai", collectionSlug: "vong_tay", material: "Ngọc trai nước ngọt 6mm, Vỏ điệp nhỏ, Dây đàn hồi", price: "650.000 VND", description: "Chuỗi vòng tay kết từ ngọc trai nước ngọt 6mm óng ánh, xen kẽ vỏ điệp nhỏ mài bóng. Dây đàn hồi co giãn linh hoạt, vừa mọi cỡ tay, không cần khóa.", images: [SITE_IMAGES.collections.vong_tay_3], specifications: { materials: "Ngọc trai nước ngọt 6mm, Vỏ điệp nhỏ, Dây đàn hồi", dimensions: "Chu vi 15–18cm (đàn hồi)", reference: "RRS-VT-003" }, featured: false },
  { slug: "vong_tay-004", name: "Vòng Đôi Vỏ Ốc Mini", collectionSlug: "vong_tay", material: "Dây da lộn, Vỏ ốc mini, Khóa gỗ", price: "420.000 VND", description: "Bộ hai vòng tay da lộn mảnh, đính vỏ ốc mini rải thưa tự nhiên. Khóa gỗ thô mộc tạo nét bohemian đặc trưng. Phù hợp đeo đơn lẻ hoặc kết hợp cùng nhau.", images: [SITE_IMAGES.collections.vong_tay_4], specifications: { materials: "Da lộn, Vỏ ốc mini, Gỗ tự nhiên", dimensions: "Bộ 2 chiếc, Điều chỉnh 14–18cm", reference: "RRS-VT-004" }, featured: false },
];

// 1 Cửa hàng tại Phú Quốc
export const BOUTIQUES_DATA: Boutique[] = [
  {
    name: "Rì Rào Store – Phú Quốc",
    city: "Phú Quốc",
    region: "South",
    address: "12 Trần Hưng Đạo, Dương Đông, Phú Quốc, Kiên Giang",
    phone: "+84 297 3980 888",
    hours: [
      "Thứ Hai - Thứ Bảy: 9:00 sáng - 8:00 tối",
      "Chủ Nhật: 10:00 sáng - 6:00 tối"
    ],
    coordinates: { lat: 10.21770, lng: 103.95890 }
  }
];

// Timeline Milestones
export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2026",
    title: "Thành Lập Xưởng Chế Tác",
    description: "Những người sáng lập Rì Rào Store mở xưởng thiết kế thủ công đầu tiên tại bờ biển Việt Nam, bắt đầu hành trình lãng mạn khơi nguồn cảm hứng nghệ thuật từ biển cả.",
    image: SITE_IMAGES.megaMenu.atelierFeatured1
  },
  {
    year: "2027",
    title: "Kỹ Thuật Sắp Đặt Xà Cừ Độc Quyền",
    description: "Xưởng giới thiệu kỹ thuật khảm và đánh bóng vỏ trai tự nhiên óng ánh (NacrePolish™), giúp giữ nguyên vẹn lớp màu xà cừ rực rỡ và lộng lẫy bền bỉ với thời gian.",
    image: SITE_IMAGES.sections.editorial
  },
  {
    year: "2028",
    title: "Tuyệt Tác Xà Cừ Bốn Lá (Alhambra)",
    description: "Rì Rào Store ra mắt mẫu vòng cổ cỏ bốn lá may mắn khảm xà cừ trắng tự nhiên, nhanh chóng trở thành biểu tượng tinh tế được săn đón toàn cầu.",
    image: SITE_IMAGES.collections.alhambra
  },
  {
    year: "2029",
    title: "Tuyệt Tác Poetic Complications",
    description: "Đánh dấu sự phát triển vượt bậc, xưởng cho ra mắt dòng đồng hồ Thủy triều cơ khí hiển thị chuyển động trăng khuyết và tiếng sóng vỗ trên mặt số xà cừ.",
    image: SITE_IMAGES.collections.poeticComplications
  },
  {
    year: "2030",
    title: "Triển Lãm Nghệ Thuật Đại Dương",
    description: "Xưởng tổ chức triển lãm nghệ thuật quốc tế tôn vinh vẻ đẹp của rạn san hô hoang dã, tiếp tục truyền tải bức thông điệp bảo vệ môi trường biển bền vững.",
    image: SITE_IMAGES.collections.snowflake
  }
];

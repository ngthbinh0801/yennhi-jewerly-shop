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
  category: "necklaces" | "bracelets" | "earrings" | "rings" | "handbags" | "mirrors";
  theme: CollectionTheme;
}

export interface Product {
  slug: string;
  name: string;
  collectionSlug: string;
  price: string;
  description: string;
  images: string[];
  specifications: {
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
    name: "Dây Chuyền",
    tagline: "Chất thơ đại dương trên đôi vai trần gợi cảm",
    description: "Bộ sưu tập dây chuyền vỏ ốc, vỏ sò Rì Rào mang hơi thở dịu dàng của biển cả vào từng thiết kế. Mỗi chiếc dây chuyền là một mảnh ký ức được nâng niu: có nét mộc mạc của vỏ tự nhiên, ánh vàng thanh lịch và vẻ mềm mại đầy nữ tính. Không chỉ là phụ kiện, bộ sưu tập còn gợi cảm giác bình yên, tự do và gần gũi với thiên nhiên, dành cho những ai yêu vẻ đẹp tinh tế nhưng vẫn chân thật.",
    image: SITE_IMAGES.collections.editorial_day_chuyen,
    heroImage: SITE_IMAGES.collections.day_chuyen_hero,
    itemCount: 12,
    category: "necklaces",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "nhan_vo_oc",
    name: "Nhẫn Vỏ Ốc",
    tagline: "Ánh cầu vồng lấp lánh đọng trên ngón tay xinh",
    description: "Bộ sưu tập nhẫn vỏ ốc là sự kết hợp giữa nét độc đáo của biển cả và vẻ đẹp tinh tế trong từng chi tiết thủ công. Mỗi chiếc nhẫn mang hình dáng riêng của vỏ ốc, vỏ sò tự nhiên, tạo cảm giác vừa mềm mại vừa cuốn hút. Không chỉ tôn lên đôi tay, bộ sưu tập còn gợi nhắc về những kỷ niệm bên biển, dành cho người yêu phong cách nhẹ nhàng, khác biệt và gần gũi với thiên nhiên.",
    image: SITE_IMAGES.collections.nhan_editorial,
    heroImage: SITE_IMAGES.collections.nhan,
    itemCount: 4,
    category: "rings",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "gio_vo_so",
    name: "Phụ Kiện Tóc & Túi",
    tagline: "Giỏ tre bện mây khảm sò biển mộc mạc và hoang sơ",
    description: "Bộ sưu tập kẹp tóc vỏ sò mang vẻ đẹp ngọt ngào, nhẹ nhàng như những cơn gió biển mùa hè. Từng chiếc kẹp được điểm xuyết bằng vỏ sò, ngọc trai và sắc màu dịu mắt, tạo nên cảm giác nữ tính nhưng vẫn rất tự nhiên. Đây không chỉ là món phụ kiện làm đẹp cho mái tóc, mà còn là một dấu ấn nhỏ xinh giúp người dùng lưu giữ sự trong trẻo, vui tươi và lãng mạn của biển cả.\n\nBộ sưu tập túi vỏ sò là lựa chọn dành cho những ai yêu sự nổi bật nhưng vẫn tinh tế. Mỗi chiếc túi được tạo nên từ chất liệu thủ công, kết hợp cùng vỏ sò, ngọc trai và chi tiết đan móc mềm mại, gợi cảm giác gần gũi với thiên nhiên. Không chỉ dùng để đựng những món đồ nhỏ, bộ sưu tập còn như một phụ kiện thời trang mang hơi thở biển cả, phù hợp cho những buổi dạo phố, đi biển hay những dịp đặc biệt.",
    image: SITE_IMAGES.collections.tui_xach_editorial,
    heroImage: SITE_IMAGES.collections.tui_xach,
    itemCount: 6,
    category: "handbags",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "guong_vo_so",
    name: "Phụ Kiện Lifestyle",
    tagline: "Khung gương nghệ thuật làm từ ngàn vỏ điệp biển sâu",
    description: "Bộ sưu tập gương vỏ sò mang vẻ đẹp mềm mại, nữ tính và đầy chất thơ của biển cả. Từng chiếc gương được trang trí bằng vỏ sò, ngọc trai và những chi tiết thủ công tỉ mỉ, tạo nên cảm giác vừa cổ điển vừa đáng yêu. Không chỉ dùng để soi hằng ngày, bộ sưu tập còn như một món đồ decor nhỏ xinh, giúp góc bàn trang điểm trở nên ấm áp, tinh tế và mang dấu ấn riêng.\n\nBộ sưu tập rương đựng trang sức vỏ sò là nơi lưu giữ những món phụ kiện yêu thích theo cách thật dịu dàng và ý nghĩa. Mỗi chiếc rương được phủ đầy vỏ sò, vỏ ốc và ngọc trai, gợi cảm giác như một kho báu nhỏ được nhặt về từ biển. Không chỉ tiện dụng để cất giữ trang sức, bộ sưu tập còn mang giá trị trang trí, phù hợp với những ai yêu vẻ đẹp thủ công, lãng mạn và khác biệt.",
    image: SITE_IMAGES.collections.guong_editorial,
    heroImage: SITE_IMAGES.collections.guong,
    itemCount: 8,
    category: "mirrors",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "khuyen_tai",
    name: "Khuyên Tai",
    tagline: "Ánh xà cừ lung linh đung đưa bên khóe mắt",
    description: "Bộ sưu tập bông tai vỏ sò mang vẻ đẹp thanh thoát, dịu dàng và đậm hơi thở biển cả. Mỗi đôi bông tai được kết hợp từ vỏ sò, vỏ ốc, ngọc trai và những gam màu nhẹ nhàng, tạo nên cảm giác vừa nữ tính vừa nổi bật. Không chỉ là món phụ kiện tô điểm cho gương mặt, bộ sưu tập còn gợi lên nét lãng mạn, tươi sáng và tinh tế, dành cho những ai yêu phong cách mềm mại, duyên dáng và gần gũi với thiên nhiên.",
    image: SITE_IMAGES.collections.khuyen_tai_editorial,
    heroImage: SITE_IMAGES.collections.khuyen_tai,
    itemCount: 6,
    category: "earrings",
    theme: { heroBg: "#12282E", heroText: "#A8D4D8", heroMuted: "rgba(168,212,216,0.65)", dark: true },
  },
  {
    slug: "vong_tay",
    name: "Vòng Tay",
    tagline: "Nhịp điệu sóng vỗ dịu êm bện chặt cổ tay",
    description: "Bộ sưu tập vòng tay vỏ sò mang nét đẹp nhẹ nhàng, tinh tế và phảng phất hơi thở của biển. Mỗi chiếc vòng được kết hợp từ vỏ sò, vỏ ốc, ngọc trai và những chi tiết thủ công nhỏ xinh, tạo nên cảm giác vừa thanh lịch vừa gần gũi. Không chỉ là phụ kiện tô điểm cho cổ tay, bộ sưu tập còn gợi lên sự tự do, dịu êm và những ký ức đẹp về biển cả, dành cho người yêu phong cách nữ tính và tự nhiên.",
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
  { slug: "day_chuyen_vo_so-001", name: "Dây Chuyền Mặt Ốc Gai Tự Nhiên", collectionSlug: "day_chuyen_vo_so", price: "109.000 VND", description: "Mặt dây chuyền là chiếc vỏ ốc gai nguyên bản lấy từ biển, được làm sạch và đánh bóng nhẹ để giữ nguyên vẻ hoang sơ độc đáo. Dây bạc 925 mảnh mai, dài có thể điều chỉnh.", images: [SITE_IMAGES.collections.day_chuyen_1], specifications: { dimensions: "Mặt ốc 25–35mm, Dây dài 40–45cm", reference: "RRS-DC-001" }, featured: true },
  { slug: "day_chuyen_vo_so-002", name: "Dây Chuyền Mặt Ốc Biển Thuôn Dài", collectionSlug: "day_chuyen_vo_so", price: "99.000 VND", description: "Hình dáng thuôn dài thanh mảnh của vỏ ốc biển tạo nên nét duyên dáng, hiện đại. Mỗi chiếc ốc được lựa chọn kỹ càng để đảm bảo màu sắc đồng đều và bề mặt láng mịn.", images: [SITE_IMAGES.collections.day_chuyen_2], specifications: { dimensions: "Mặt ốc 30–40mm, Dây dài 40–45cm", reference: "RRS-DC-002" }, featured: false },
  { slug: "day_chuyen_vo_so-003", name: "Dây Chuyền Vỏ Ốc Tròn Bọc Viền Vàng", collectionSlug: "day_chuyen_vo_so", price: "99.000 VND", description: "Vỏ ốc tròn xà cừ ánh ngũ sắc được bọc viền mạ vàng 14K tinh tế. Ánh xà cừ đổi màu huyền ảo theo từng góc nhìn, tôn lên vẻ thanh lịch cho mọi phong cách.", images: [SITE_IMAGES.collections.day_chuyen_3], specifications: { dimensions: "Mặt tròn Ø20mm, Dây dài 40cm", reference: "RRS-DC-003" }, featured: false },
  { slug: "day_chuyen_vo_so-004", name: "Dây Chuyền Mặt Vỏ Sò Điệp Mạ Vàng", collectionSlug: "day_chuyen_vo_so", price: "89.000 VND", description: "Chiếc vỏ sò điệp dẹt nhẹ nhàng được mạ vàng 14K tỉ mỉ, mang vẻ đẹp sang trọng mà vẫn gần gũi với thiên nhiên. Thiết kế tối giản, dễ phối với mọi trang phục.", images: [SITE_IMAGES.collections.day_chuyen_4], specifications: { dimensions: "Mặt sò 20–28mm, Dây dài 40–45cm", reference: "RRS-DC-004" }, featured: false },
  { slug: "day_chuyen_vo_so-005", name: "Dây Chuyền Vỏ Ốc Biển Màu Xanh Rêu", collectionSlug: "day_chuyen_vo_so", price: "119.000 VND", description: "Vỏ ốc biển được nhuộm màu xanh rêu tự nhiên, gợi lên hình ảnh làn nước trong vắt của đại dương. Màu sắc bền đẹp, không phai, phù hợp đeo hàng ngày hay đi biển.", images: [SITE_IMAGES.collections.day_chuyen_5], specifications: { dimensions: "Mặt ốc 20–30mm, Dây dài 40–45cm", reference: "RRS-DC-005" }, featured: false },
  { slug: "day_chuyen_vo_so-006", name: "Dây Chuyền Vỏ Ốc Xà Cừ Ánh Hồng", collectionSlug: "day_chuyen_vo_so", price: "109.000 VND", description: "Lớp xà cừ bóng mịn bên trong chiếc vỏ ốc phản chiếu ánh hồng phấn dịu dàng, nữ tính. Được đánh bóng thủ công để giữ nguyên độ sáng tự nhiên, gắn trên dây bạc mạ vàng.", images: [SITE_IMAGES.collections.day_chuyen_6], specifications: { dimensions: "Mặt ốc 25–35mm, Dây dài 40–45cm", reference: "RRS-DC-006" }, featured: true },
  { slug: "day_chuyen_vo_so-007", name: "Dây Chuyền Choker Sắc Biển Mùa Hạ", collectionSlug: "day_chuyen_vo_so", price: "129.000 VND", description: "Choker sát cổ với chuỗi vỏ sò điệp mini xếp tầng dày đặc, ánh ngũ sắc lấp lánh dưới ánh sáng. Kiểu đeo sát cổ tôn lên đường nét thanh thoát của cổ trần, phù hợp với đầm vai trần hoặc áo cổ rộng.", images: [SITE_IMAGES.collections.day_chuyen_7], specifications: { dimensions: "Chuỗi dài 35–38cm, Điều chỉnh được", reference: "RRS-DC-007" }, featured: false },
  { slug: "day_chuyen_vo_so-008", name: "Dây Chuyền Vỏ Sò Trắng Sao Biển Nhỏ", collectionSlug: "day_chuyen_vo_so", price: "149.000 VND", description: "Bộ dây chuyền layering 3 tầng dài ngắn khác nhau, mỗi tầng đính vỏ ốc biển tự nhiên. Phối sẵn tạo cảm giác đeo nhiều lớp nhưng thực ra chỉ một móc cài — tiện lợi và thời thượng.", images: [SITE_IMAGES.collections.day_chuyen_8], specifications: { dimensions: "Tầng 1: 38cm, Tầng 2: 42cm, Tầng 3: 46cm", reference: "RRS-DC-008" }, featured: false },
  { slug: "day_chuyen_vo_so-009", name: "Dây Chuyền Vỏ Sò Hồng Sao Biển", collectionSlug: "day_chuyen_vo_so", price: "139.000 VND", description: "Mặt dây chuyền hình ngôi sao biển được đúc từ hợp kim mạ vàng 14K tinh tế, điểm thêm hạt vỏ ốc nhỏ ở mỗi cánh. Biểu tượng may mắn của đại dương, dễ phối cùng mọi trang phục.", images: [SITE_IMAGES.collections.day_chuyen_9], specifications: { dimensions: "Mặt sao Ø22mm, Dây dài 40–45cm", reference: "RRS-DC-009" }, featured: false },
  { slug: "day_chuyen_vo_so-010", name: "Dây Chuyền Vỏ Sò Xanh Biển Ngọc Trai", collectionSlug: "day_chuyen_vo_so", price: "95.000 VND", description: "Vỏ sò nâu sọc hoang dã mang vẻ đẹp mộc mạc, chân thực của biển. Mỗi chiếc vỏ mang hoa văn vân sọc tự nhiên duy nhất, không chiếc nào giống chiếc nào — phụ kiện độc bản thực sự.", images: [SITE_IMAGES.collections.day_chuyen_10], specifications: { dimensions: "Mặt sò 20–30mm, Dây dài 40–45cm", reference: "RRS-DC-010" }, featured: false },
  { slug: "day_chuyen_vo_so-011", name: "Dây Chuyền Vỏ Sò Trắng Chuỗi Hạt Pastel", collectionSlug: "day_chuyen_vo_so", price: "119.000 VND", description: "Dây chuyền dài boho chuỗi vỏ ốc biển nhỏ xen kẽ hạt đá xà cừ. Phong cách tự do, có thể đeo quấn một vòng hoặc thả dài, phù hợp đi biển, đi dạo hay các dịp ngoài trời.", images: [SITE_IMAGES.collections.day_chuyen_11], specifications: { dimensions: "Dài 70–75cm (đeo thả hoặc quấn đôi)", reference: "RRS-DC-011" }, featured: false },
  { slug: "day_chuyen_vo_so-012", name: "Dây Chuyền Vỏ Sò Hồng Ánh Ngọc", collectionSlug: "day_chuyen_vo_so", price: "159.000 VND", description: "Mặt dây chuyền điệp màu xanh biển sâu huyền bí, được khảm chi tiết vàng tinh xảo theo kỹ thuật thủ công truyền thống. Màu xanh đặc trưng tự nhiên, không nhuộm — từng chiếc là một tác phẩm độc nhất.", images: [SITE_IMAGES.collections.day_chuyen_12], specifications: { dimensions: "Mặt điệp 28–35mm, Dây dài 40–45cm", reference: "RRS-DC-012" }, featured: true },

  // ── NHẪN VỎ ỐC ────────────────────────────────────────────
  { slug: "nhan_vo_oc-001", name: "Nhẫn Kép Vỏ Ốc Nhọn Và Vỏ Sò Trắng", collectionSlug: "nhan_vo_oc", price: "85.000 VND", description: "Thiết kế kép độc đáo kết hợp vỏ ốc nhọn và vỏ sò trắng nhỏ nhắn trên cùng một đế bạc 925. Lạ mắt, cá tính nhưng vẫn nhẹ nhàng — rất phù hợp phong cách trẻ trung hàng ngày.", images: [SITE_IMAGES.collections.nhan_1], specifications: { dimensions: "Tổng chiều dài 20–25mm, Size: 5–9", reference: "RRS-NH-001" }, featured: true },
  { slug: "nhan_vo_oc-002", name: "Nhẫn Bản To Phối Vỏ Sò Điệp Và Vỏ Ốc Đính Đá", collectionSlug: "nhan_vo_oc", price: "135.000 VND", description: "Nhẫn bản to ấn tượng với vỏ sò điệp tròn bên dưới và vỏ ốc nhọn đính đá lấp lánh bên trên. Chi tiết gia công tỉ mỉ, mạ vàng tinh tế — điểm nhấn hoàn hảo cho mọi bộ trang phục.", images: [SITE_IMAGES.collections.nhan_2], specifications: { dimensions: "Bản nhẫn 18–22mm, Size: 5–9", reference: "RRS-NH-002" }, featured: false },
  { slug: "nhan_vo_oc-003", name: "Nhẫn Vỏ Ốc Xoắn Tròn Màu Trắng", collectionSlug: "nhan_vo_oc", price: "65.000 VND", description: "Vỏ ốc xoắn tròn màu trắng thuần khiết — thiết kế tối giản một màu, dễ phối với mọi phong cách từ đi học đến đi chơi. Nhẹ nhàng, tươi sáng, chi phí thân thiện.", images: [SITE_IMAGES.collections.nhan_3], specifications: { dimensions: "Mặt ốc Ø12–15mm, Size: 5–9", reference: "RRS-NH-003" }, featured: false },
  { slug: "nhan_vo_oc-004", name: "Nhẫn Mặt Tròn Vỏ Xà Cừ Viền Vàng Bản To", collectionSlug: "nhan_vo_oc", price: "115.000 VND", description: "Mặt nhẫn tròn xà cừ cỡ lớn bắt sáng đẹp, bao quanh bởi viền hạt mạ vàng giả cổ chắc chắn. Phong cách retro sang trọng, tạo cảm giác đầy đặn và nổi bật ở bàn tay.", images: [SITE_IMAGES.collections.nhan_4], specifications: { dimensions: "Mặt tròn Ø18–20mm, Size: 5–9", reference: "RRS-NH-004" }, featured: false },

  // ── GIỎ VỎ SÒ ─────────────────────────────────────────────
  { slug: "gio_vo_so-001", name: "Túi Cói Dệt Nổi Quai Ngọc Trai Màu Nâu", collectionSlug: "gio_vo_so", price: "165.000 VND", description: "Túi cói dệt nổi thủ công màu nâu vintage ấm áp, quai được kết từ chuỗi ngọc trai nước ngọt tạo nét duyên dáng tinh tế. Sản phẩm mây tre đan tốn công gia công, bền đẹp theo thời gian.", images: [SITE_IMAGES.collections.tui_xach_1], specifications: { dimensions: "28×22×12cm, Quai dài 35cm", reference: "RRS-GI-001" }, featured: true },
  { slug: "gio_vo_so-002", name: "Túi Cói Dệt Nổi Quai Ngọc Trai Màu Trắng", collectionSlug: "gio_vo_so", price: "165.000 VND", description: "Phiên bản màu trắng tinh khôi của dòng túi cói dệt nổi quai ngọc trai. Tông trắng sáng dễ phối đồ, phù hợp đi biển, đi chơi hay làm quà tặng ý nghĩa.", images: [SITE_IMAGES.collections.tui_xach_2], specifications: { dimensions: "28×22×12cm, Quai dài 35cm", reference: "RRS-GI-002" }, featured: false },
  { slug: "gio_vo_so-003", name: "Túi Vải Đính Vảy Xà Cừ Quai Gỗ Tròn", collectionSlug: "gio_vo_so", price: "185.000 VND", description: "Túi xách du lịch biển với bề mặt phủ kín các mảnh vảy xà cừ dẹt lấp lánh, quai gỗ tròn chắc chắn tạo điểm nhấn thời trang độc đáo. Lý tưởng cho những ngày hè rực rỡ.", images: [SITE_IMAGES.collections.tui_xach_3], specifications: { dimensions: "24×20×8cm, Quai gỗ Ø14cm", reference: "RRS-GI-003" }, featured: false },
  { slug: "gio_vo_so-004", name: "Túi Cầm Tay Đính Vảy Xà Cừ Khuy Gỗ", collectionSlug: "gio_vo_so", price: "175.000 VND", description: "Túi clutch cầm tay phong cách với bề mặt đính vảy xà cừ lấp lánh và khuy cài gỗ thô mộc. Dáng cầm tay gọn nhẹ, phù hợp đi dạo phố, cafe hay sự kiện ngoài trời.", images: [SITE_IMAGES.collections.tui_xach_4], specifications: { dimensions: "22×14×4cm, Cầm tay", reference: "RRS-GI-004" }, featured: false },
  { slug: "gio_vo_so-005", name: "Kẹp Tóc Hoa 5 Cánh Từ Vỏ Sò Biển", collectionSlug: "gio_vo_so", price: "55.000 VND", description: "Kẹp tóc thủ công hình bông hoa 5 cánh ghép từ vỏ sò biển tự nhiên nhiều màu sắc. Kích thước nhỏ gọn xinh xắn, phôi kẹp inox chắc chắn, không gỉ — phụ kiện tóc mùa hè đáng yêu.", images: [SITE_IMAGES.collections.tui_xach_5], specifications: { dimensions: "Hoa Ø4–5cm, Kẹp dài 7cm", reference: "RRS-GI-005" }, featured: false },
  { slug: "gio_vo_so-006", name: "Kẹp Tóc Hình Nơ Vỏ Sò Đính Sao Biển Nhỏ", collectionSlug: "gio_vo_so", price: "60.000 VND", description: "Kẹp tóc hình nơ/bướm độc đáo kết từ nhiều loại vỏ sò tự nhiên, điểm thêm sao biển nhỏ xinh và hạt cườm làm râu bướm. Thủ công tinh tế, là phụ kiện tóc nổi bật cho bạn gái yêu biển.", images: [SITE_IMAGES.collections.tui_xach_6], specifications: { dimensions: "Nơ 6×4cm, Kẹp dài 8cm", reference: "RRS-GI-006" }, featured: false },

  // ── GƯƠNG ĐÍNH VỎ SÒ ──────────────────────────────────────
  { slug: "guong_vo_so-001", name: "Gương Cầm Tay Mini Viền Vỏ Sò Nhỏ", collectionSlug: "guong_vo_so", price: "110.000 VND", description: "Gương cầm tay mini kích thước nhỏ gọn vừa bỏ túi, viền khung được đính kết vỏ sò nhỏ tự nhiên thủ công. Tiện lợi mang theo mọi lúc, mọi nơi.", images: [SITE_IMAGES.collections.guong_1], specifications: { dimensions: "Dài 28cm, Mặt gương Ø14cm", reference: "RRS-GU-001" }, featured: true },
  { slug: "guong_vo_so-002", name: "Gương Để Bàn Dáng Sóng Viền Ốc Biển (Đế Gỗ)", collectionSlug: "guong_vo_so", price: "145.000 VND", description: "Gương để bàn phom uốn lượn dáng sóng biển độc đáo, viền đính ốc biển tự nhiên. Kèm đế gỗ cắm đứng tiện lợi, điểm trang trí nhẹ nhàng cho bàn phấn hay kệ phòng.", images: [SITE_IMAGES.collections.guong_2], specifications: { dimensions: "Ø50cm, Móc treo kèm theo", reference: "RRS-GU-002" }, featured: false },
  { slug: "guong_vo_so-003", name: "Gương Để Bàn Khung Chữ Nhật Đính Sao Biển Và Vỏ Sò", collectionSlug: "guong_vo_so", price: "150.000 VND", description: "Gương để bàn phom chữ nhật basic, viền khung đính sao biển và vỏ sò tự nhiên đa dạng. Thiết kế đơn giản, dễ phối hợp với mọi không gian.", images: [SITE_IMAGES.collections.guong_3], specifications: { dimensions: "Mặt gương 18×18cm, Đế 15×10cm", reference: "RRS-GU-003" }, featured: false },
  { slug: "guong_vo_so-004", name: "Gương Để Bàn Oval Đính Dày Vỏ Ốc Biển", collectionSlug: "guong_vo_so", price: "195.000 VND", description: "Gương để bàn hình oval với khung được phủ kín dày đặc vỏ ốc biển tự nhiên thủ công. Tốn nhiều nguyên liệu và công đính kết, tạo bề mặt độc đáo bắt mắt.", images: [SITE_IMAGES.collections.guong_4], specifications: { dimensions: "60×40cm, Có thể treo dọc hoặc ngang", reference: "RRS-GU-004" }, featured: false },
  { slug: "guong_vo_so-005", name: "Gương Cầm Tay Viền Ren Đính Vỏ Sò Tròn", collectionSlug: "guong_vo_so", price: "135.000 VND", description: "Gương cầm tay nữ tính với viền phối vải ren xung quanh mặt gương, điểm thêm các vỏ sò tròn nhỏ xinh. Phong cách vintage nhẹ nhàng, tinh tế.", images: [SITE_IMAGES.collections.guong_5], specifications: { dimensions: "Vỏ điệp 6–8cm, Kính 3cm", reference: "RRS-GU-005" }, featured: false },
  { slug: "guong_vo_so-006", name: "Rương Trang Sức Nắp Vòm Đính Kín Vỏ Ốc Quai Ngọc Trai", collectionSlug: "guong_vo_so", price: "850.000 VND", description: "Rương trang sức nắp vòm cong được đính phủ kín 100% bề mặt bằng vỏ ốc biển tự nhiên hoàn toàn thủ công. Quai xách ngọc trai sang trọng, khóa đồng chắc chắn.", images: [SITE_IMAGES.collections.guong_6], specifications: { dimensions: "Kích thước trung bình, Nắp vòm", reference: "RRS-GU-006" }, featured: false },
  { slug: "guong_vo_so-007", name: "Hộp Trang Sức Chữ Nhật Phẳng Đính Kín Vỏ Sò Và Ốc Cúc", collectionSlug: "guong_vo_so", price: "750.000 VND", description: "Hộp trang sức chữ nhật bề mặt phẳng đính kín vỏ sò và ốc cúc tự nhiên thủ công. Bố cục phẳng dễ sắp xếp hoa văn, nắp hộp và thân hộp đều được trang trí đồng bộ.", images: [SITE_IMAGES.collections.guong_7], specifications: { dimensions: "Hộp chữ nhật phẳng", reference: "RRS-GU-007" }, featured: false },
  { slug: "guong_vo_so-008", name: "Hộp Trang Sức Chữ Nhật Nắp Đính Cụm Vỏ Ốc Điêu Khắc Lớn", collectionSlug: "guong_vo_so", price: "950.000 VND", description: "Hộp trang sức chữ nhật với điểm nhấn là cụm vỏ ốc tạo hình bông hoa lớn ở giữa nắp hộp. Đòi hỏi công chọn lọc vỏ đối xứng tỉ mỉ, là tác phẩm thủ công tinh xảo.", images: [SITE_IMAGES.collections.guong_8], specifications: { dimensions: "Hộp chữ nhật, Cụm ốc trung tâm", reference: "RRS-GU-008" }, featured: false },

  // ── HỘP ĐỰNG TRANG SỨC ────────────────────────────────────
  { slug: "khuyen_tai-001", name: "Khuyên Tai Dáng Thả 2 Tầng Vỏ Sò Xà Cừ Trắng (Chốt Ngọc Trai)", collectionSlug: "khuyen_tai", price: "145.000 VND", description: "Khuyên tai dáng thả hai tầng sang chảnh với bản vỏ sò xà cừ trắng lớn lấp lánh, chốt ngọc trai tinh tế. Phù hợp đi tiệc hoặc chụp ảnh sống ảo, tạo điểm nhấn ấn tượng cho đôi tai.", images: [SITE_IMAGES.collections.khuyen_tai_1], specifications: { dimensions: "Mảnh điệp 25mm, Dài tổng 45mm", reference: "RRS-KT-001" }, featured: true },
  { slug: "khuyen_tai-002", name: "Khuyên Tai Nụ Vỏ Ốc Tròn Trắng Viền Hạt Cườm", collectionSlug: "khuyen_tai", price: "95.000 VND", description: "Khuyên nụ nhỏ nhắn ôm sát tai với mặt vỏ ốc tròn màu trắng, viền ngoài đính hạt cườm nhỏ xinh. Kiểu dáng đơn giản dễ đeo đi học hay đi làm hàng ngày.", images: [SITE_IMAGES.collections.khuyen_tai_2], specifications: { dimensions: "Ø8mm, Chốt dài 12mm", reference: "RRS-KT-002" }, featured: false },
  { slug: "khuyen_tai-003", name: "Khuyên Tai Móc Xỏ Mặt Vỏ Sò Tròn Màu Hồng", collectionSlug: "khuyen_tai", price: "85.000 VND", description: "Khuyên tai móc xỏ với mặt vỏ sò tròn phom dẹt màu hồng nhạt nhẹ nhàng. Màu sắc pastel dịu dàng, dễ phối đồ, giá mềm phù hợp đeo hàng ngày.", images: [SITE_IMAGES.collections.khuyen_tai_3], specifications: { dimensions: "18×12mm, Móc dài 10mm", reference: "RRS-KT-003" }, featured: false },
  { slug: "khuyen_tai-004", name: "Khuyên Tai Dáng Thả Quấn Dây Thép Phối Vỏ Sò Hồng", collectionSlug: "khuyen_tai", price: "115.000 VND", description: "Khuyên tai thả dài với vỏ sò màu hồng đậm được quấn dây thép kim loại thủ công xung quanh. Trang trí thêm hạt ngọc trai nhựa nhỏ, gia công tỉ mỉ tạo nét độc đáo riêng.", images: [SITE_IMAGES.collections.khuyen_tai_4], specifications: { dimensions: "Cụm 20mm, Tổng dài 35mm", reference: "RRS-KT-004" }, featured: false },
  { slug: "khuyen_tai-005", name: "Khuyên Tai Dáng Thả Phối Đá Xanh Và Vỏ Ốc Tai Tượng", collectionSlug: "khuyen_tai", price: "125.000 VND", description: "Khuyên tai thả ấn tượng với chuỗi hạt đá xanh ngọc bích phối cùng mặt vỏ ốc tai tượng xà cừ tự nhiên phản quang. Màu sắc tươi tắn, nổi bật, thu hút ánh nhìn.", images: [SITE_IMAGES.collections.khuyen_tai_5], specifications: { dimensions: "Ø14mm, Chốt dài 10mm", reference: "RRS-KT-005" }, featured: false },
  { slug: "khuyen_tai-006", name: "Khuyên Tai Chuỗi Dài Phối Ngọc Trai Và Vỏ Sò Điệp Nhỏ", collectionSlug: "khuyen_tai", price: "75.000 VND", description: "Khuyên tai chuỗi dài thanh mảnh với vỏ sò điệp nhỏ màu trắng ngà xen kẽ hạt ngọc trai. Kích thước nhỏ nhắn, nhẹ nhàng, giá mềm phù hợp học sinh sinh viên.", images: [SITE_IMAGES.collections.khuyen_tai_6], specifications: { dimensions: "Tổng dài 55mm", reference: "RRS-KT-006" }, featured: true },

  // ── VÒNG TAY VỎ SÒ ────────────────────────────────────────
  { slug: "vong_tay-001", name: "Vòng Tay Lắc Tay Phối Vỏ Ốc Cúc Và Hạt Ngọc Trai", collectionSlug: "vong_tay", price: "115.000 VND", description: "Lắc tay dạng xích kim loại đính vỏ ốc cúc trắng và hạt ngọc trai xen kẽ. Có xích nối điều chỉnh độ rộng, thiết kế thanh lịch phù hợp đeo đi học hay đi làm.", images: [SITE_IMAGES.collections.vong_tay_1], specifications: { dimensions: "Điều chỉnh 14–19cm", reference: "RRS-VT-001" }, featured: true },
  { slug: "vong_tay-002", name: "Vòng Tay Dây Chỉ Bện Đính Cụm Vỏ Ốc Biển Tự Nhiên", collectionSlug: "vong_tay", price: "85.000 VND", description: "Vòng tay dây chỉ đan thắt nút thủ công đính cụm vỏ ốc biển dẹt tự nhiên. Bán lẻ 85.000đ/chiếc hoặc combo cặp đôi bạn thân 150.000đ/2 chiếc.", images: [SITE_IMAGES.collections.vong_tay_2], specifications: { dimensions: "Điều chỉnh theo nút thắt", reference: "RRS-VT-002" }, featured: false },
  { slug: "vong_tay-003", name: "Vòng Tay Dây Rút Chuỗi Hạt Đá Phối Charm Sao Biển Và Vỏ Sò", collectionSlug: "vong_tay", price: "145.000 VND", description: "Vòng tay dây rút với chuỗi hạt đá xà cừ bắt sáng, charm sao biển kim loại và mặt vỏ sò điệp vàng làm điểm nhấn trung tâm. Nhiều chi tiết tỉ mỉ, tốn công xỏ chuỗi.", images: [SITE_IMAGES.collections.vong_tay_3], specifications: { dimensions: "Chu vi 15–18cm (dây rút)", reference: "RRS-VT-003" }, featured: false },
  { slug: "vong_tay-004", name: "Vòng Tay Dây Rút Đính Charm Biển (Rùa Con / Sao Biển / Vỏ Ốc)", collectionSlug: "vong_tay", price: "75.000 VND", description: "Set 3 sợi vòng dây rút thắt nút độc lập, mỗi sợi đính một charm biển: rùa con, sao biển hoặc vỏ ốc cúc. Dây sáp chịu nước, tối giản, giá mềm phù hợp học sinh đeo hàng ngày.", images: [SITE_IMAGES.collections.vong_tay_4], specifications: { dimensions: "Set 3 chiếc, Điều chỉnh 14–18cm", reference: "RRS-VT-004" }, featured: false },
];

// 1 Cửa hàng tại Phú Quốc
export const BOUTIQUES_DATA: Boutique[] = [
  {
    name: "Rì Rào Store – Phú Quốc",
    city: "Phú Quốc",
    region: "South",
    address: "18 Đường Trần Hưng Đạo, Khu Phố 7, Phú Quốc, Tỉnh An Giang",
    phone: "0888 525 525",
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

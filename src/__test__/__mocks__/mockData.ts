import {
  NEWS_QUERYResult,
  TERMS_QUERYResult,
  UNITS_QUERYResult,
} from "@/sanity/types";
import { Metadata } from "next";
import logo from "@/assets/image/background/logo-doan-thanh-nien.webp";

export const mockTerms: TERMS_QUERYResult = [
  {
    _id: "1",
    name: "Term 1",
    description: "Term 1 Description",
    data: [
      {
        name: "Data 1",
        _id: "1",
        title: ["Title 1"],
        image: "Image 1",
      },
    ],
    _createdAt: "2021-08-01T00:00:00Z",
    _updatedAt: "2021-08-01T00:00:00Z",
  },
];

export const mockUnits: UNITS_QUERYResult = [
  {
    _id: "1",
    slug: {
      _type: "slug",
      current: "Slug 1",
      source: "Source 1",
    },
    name: "Unit 1",
    image: "Image 1",
    members: [
      {
        _id: "1",
        name: "Member 1",
        title: ["Title 1"],
        image: "Image 1",
        tenCsd: "Ten CSD 1",
        tenCsdTrucThuoc: "Ten CSD Truc Thuoc 1",
        soLyLich: "So Ly Lich 1",
        soTheDang: "So The Dang 1",
        gioiTinh: "Nam",
        ngaySinh: "2021-08-01T00:00:00Z",
        congViecChinhDangLam: "Cong Viec Chinh Dang Lam 1",
        tonGiao: "Ton Giao 1",
        ngayVaoDang: "2021-08-01T00:00:00Z",
        ngayVaoDangChinhThuc: "2021-08-01T00:00:00Z",
        ngayVaoDangLan2: "2021-08-01T00:00:00Z",
      },
    ],
    description: "Unit 1 Description",
    _createdAt: "2021-08-01T00:00:00Z",
    _updateAt: null,
  },
];

export const mockNews: NEWS_QUERYResult = [
  {
    _id: "1",
    slug: {
      _type: "slug",
      current: "Slug 1",
      source: "Source 1",
    },
    title: "News 1",
    image: "Image 1",
    category: "Category 1",
    author: {
      name: "Author 1",
      _id: "1",
      title: ["Title 1"],
    },
    createdAt: "2021-08-01T00:00:00Z",
  },
];

export const expectedHomeMetadata: Metadata = {
  title: "Đảng bộ xã Tân Xuân - Thông tin chính thức và hoạt động",
  description:
    "Tìm hiểu hoạt động của Đảng bộ xã Tân Xuân, ban lãnh đạo, và 27 chi bộ trực thuộc. Cập nhật thông tin mới nhất về các phong trào và sự kiện xã nhà.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Đảng bộ xã Tân Xuân - Thông tin chính thức và hoạt động",
    description:
      "Tìm hiểu hoạt động của Đảng bộ xã Tân Xuân, ban lãnh đạo, và 27 chi bộ trực thuộc. Cập nhật thông tin mới nhất về các phong trào và sự kiện xã nhà.",
    url: "https://www.dangboxatanxuan.site/",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/",
  },
};

export const expectedAboutMetadata: Metadata = {
  title: "Giới thiệu xã Tân Xuân - Vị trí, lịch sử và truyền thống cách mạng",
  description:
    "Xã Tân Xuân - nằm tại trung tâm huyện Hóc Môn. Tìm hiểu lịch sử, vị trí địa lý và truyền thống cách mạng của xã qua các thời kỳ.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Giới thiệu xã Tân Xuân - Vị trí, lịch sử và truyền thống cách mạng",
    description:
      "Xã Tân Xuân - nằm tại trung tâm huyện Hóc Môn. Tìm hiểu lịch sử, vị trí địa lý và truyền thống cách mạng của xã qua các thời kỳ.",
    url: "https://www.dangboxatanxuan.site/vi/about",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/about",
  },
};

export const expectedContactMetadata: Metadata = {
  title: "Liên hệ Đảng bộ xã Tân Xuân - Hỗ trợ và giải đáp",
  description:
    "Liên hệ với Đảng bộ xã Tân Xuân để được hỗ trợ và giải đáp mọi thông tin về các hoạt động của xã nhà.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Liên hệ Đảng bộ xã Tân Xuân - Hỗ trợ và giải đáp",
    description:
      "Liên hệ với Đảng bộ xã Tân Xuân để được hỗ trợ và giải đáp mọi thông tin về các hoạt động của xã nhà.",
    url: "https://www.dangboxatanxuan.site/vi/contact",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/contact",
  },
};

export const expectedCulturalMetadata: Metadata = {
  title: "Không gian văn hóa Hồ Chí Minh tại xã Tân Xuân",
  description:
    "Khám phá không gian văn hóa Hồ Chí Minh tại xã Tân Xuân - nơi lưu giữ giá trị văn hóa và tư tưởng của Chủ tịch Hồ Chí Minh.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Không gian văn hóa Hồ Chí Minh tại xã Tân Xuân",
    description:
      "Khám phá không gian văn hóa Hồ Chí Minh tại xã Tân Xuân - nơi lưu giữ giá trị văn hóa và tư tưởng của Chủ tịch Hồ Chí Minh.",
    url: "https://www.dangboxatanxuan.site/vi/cultural",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/cultural",
  },
};

export const expectedHistoryMetadata: Metadata = {
  title: "Lịch sử Đảng bộ xã Tân Xuân - Truyền thống cách mạng 1930-2020",
  description:
    "Tìm hiểu lịch sử đấu tranh cách mạng, phát triển kinh tế - xã hội của Đảng bộ và nhân dân xã Tân Xuân qua các giai đoạn từ 1930 đến 2020.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Lịch sử Đảng bộ xã Tân Xuân - Truyền thống cách mạng 1930-2020",
    description:
      "Tìm hiểu lịch sử đấu tranh cách mạng, phát triển kinh tế - xã hội của Đảng bộ và nhân dân xã Tân Xuân qua các giai đoạn từ 1930 đến 2020.",
    url: "https://www.dangboxatanxuan.site/vi/history",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/history",
  },
};

import { useState } from 'react'
import { StorySection } from '../components/StorySection'
import { TimelineLine } from '../components/TimelineLine'
import { MapRegion } from '../components/MapRegion'
import { StoryModal } from '../components/StoryModal'
import { useCursor } from '../systems/cursor/CursorProvider'
import mapImage from '../assets/vietnam.png'

type StorySectionData = {
  id: string
  title: string
  subtitle: string
  year: string
  description: string
  theme: string
  videoUrl?: string
}

type MapRegionData = {
  id: string
  label: string
  description: string
  body: string
  shapeClass: string
}

const sections: StorySectionData[] = [
  {
    id: '1858-1930',
    year: '1858 - 1930',
    title: 'Bối cảnh trước khi thành lập Đảng',
    subtitle: 'Mất nước, khủng hoảng đường lối và sự chuẩn bị về tư tưởng.',
    description:
      'Từ khi thực dân Pháp xâm lược, nhiều phong trào yêu nước đã diễn ra nhưng chưa tìm được đường lối đúng. Nguyễn Ái Quốc tiếp cận chủ nghĩa Mác-Lênin và chuẩn bị điều kiện cho sự ra đời của Đảng.',
    theme: 'ember',
  },
  {
    id: '1930',
    year: '1930',
    title: 'Thành lập Đảng Cộng sản Việt Nam',
    subtitle: 'Bước ngoặt quyết định của cách mạng Việt Nam.',
    description:
      'Hội nghị hợp nhất các tổ chức cộng sản tại Hương Cảng thông qua Cương lĩnh chính trị đầu tiên, xác lập nhiệm vụ giải phóng dân tộc và vai trò lãnh đạo của Đảng.',
    theme: 'crimson',
  },
  {
    id: '1930-1935',
    year: '1930 - 1935',
    title: 'Xô Viết Nghệ Tĩnh và phục hồi tổ chức',
    subtitle: 'Cao trào cách mạng đầu tiên dưới sự lãnh đạo của Đảng.',
    description:
      'Phong trào 1930-1931 với đỉnh cao Xô Viết Nghệ Tĩnh khẳng định sức mạnh quần chúng. Sau khủng bố trắng, Đảng kiên trì khôi phục cơ sở và tổ chức Đại hội I năm 1935.',
    theme: 'obsidian',
  },
  {
    id: '1936-1939',
    year: '1936 - 1939',
    title: 'Phong trào dân chủ Đông Dương',
    subtitle: 'Điều chỉnh chiến lược trong bối cảnh quốc tế biến động.',
    description:
      'Đảng chuyển sang đấu tranh công khai và nửa công khai, mở rộng mặt trận đoàn kết, đòi quyền dân sinh, dân chủ và chống chủ nghĩa phát xít.',
    theme: 'aurora',
  },
  {
    id: '1939-1945',
    year: '1939 - 1945',
    title: 'Chuyển hướng chiến lược và giành chính quyền',
    subtitle: 'Giải phóng dân tộc được đặt lên hàng đầu.',
    description:
      'Từ các hội nghị Trung ương 6, 7, 8 đến sự ra đời của Việt Minh và lực lượng vũ trang cách mạng, Đảng chớp thời cơ lãnh đạo Tổng khởi nghĩa Tháng Tám 1945 thành công.',
    theme: 'aurora',
  },
  {
    id: '1945-1954',
    year: '1945 - 1954',
    title: 'Kháng chiến chống thực dân Pháp',
    subtitle: 'Bảo vệ chính quyền cách mạng và nền độc lập non trẻ.',
    description:
      'Nhân dân cả nước tiến hành kháng chiến trường kỳ, toàn dân, toàn diện; đỉnh cao là chiến thắng Điện Biên Phủ năm 1954, mở đường cho Hiệp định Geneve.',
    theme: 'ember',
  },
  {
    id: '1954-1975',
    year: '1954 - 1975',
    title: 'Kháng chiến chống Mỹ, thống nhất đất nước',
    subtitle: 'Miền Bắc xây dựng, miền Nam chiến đấu giải phóng.',
    description:
      'Sau nhiều chiến dịch quyết định, Chiến dịch Hồ Chí Minh toàn thắng ngày 30/4/1975 đã kết thúc chiến tranh, thu non sông về một mối.',
    theme: 'crimson',
  },
  {
    id: '1975-1986',
    year: '1975 - 1986',
    title: 'Thống nhất và bước đầu xây dựng CNXH',
    subtitle: 'Vượt qua hậu chiến và khủng hoảng kinh tế - xã hội.',
    description:
      'Đất nước đối mặt nhiều khó khăn về kinh tế, an ninh biên giới và cơ chế quản lý tập trung bao cấp. Thực tiễn đặt ra yêu cầu cấp bách phải đổi mới toàn diện.',
    theme: 'obsidian',
  },
  {
    id: '1986-2006',
    year: '1986 - 2006',
    title: 'Đổi mới và mở cửa hội nhập',
    subtitle: 'Chuyển đổi mô hình phát triển trong thời bình.',
    description:
      'Đại hội VI mở ra đường lối đổi mới, Việt Nam từng bước bình thường hóa quan hệ quốc tế, gia nhập ASEAN (1995) và tạo nền tảng cho hội nhập sâu rộng.',
    theme: 'aurora',
  },
  {
    id: '2006-2024',
    year: '2006 - 2024',
    title: 'Hội nhập toàn cầu và phát triển bền vững',
    subtitle: 'Nâng tầm vị thế quốc gia trong bối cảnh mới.',
    description:
      'Gia nhập WTO (2006), thúc đẩy cải cách thể chế, đẩy mạnh xây dựng, chỉnh đốn Đảng; Đại hội XIII (2021) xác định tầm nhìn phát triển đến năm 2045.',
    theme: 'crimson',
  },
  {
    id: '2024-nay',
    year: '2024 - Nay',
    title: 'Tiếp nối mục tiêu phát triển đến 2045',
    subtitle: 'Kiện toàn lãnh đạo, giữ vững ổn định và đổi mới sáng tạo.',
    description:
      'Giai đoạn mới tập trung vào chuyển đổi số, tăng trưởng xanh, nâng cao năng lực cạnh tranh quốc gia và hiện thực hóa khát vọng phát triển đất nước trong thế kỷ XXI.',
    theme: 'crimson',
  },
  {
    id: 'map',
    year: 'Bản đồ',
    title: 'Bản đồ ký ức',
    subtitle: 'Chạm vào từng vùng đất, mở ra câu chuyện.',
    description:
      'Nhấp vào từng điểm để khám phá dấu ấn lịch sử, văn hóa và tinh thần của các vùng miền.',
    theme: 'map',
  },
]

const mapRegions: MapRegionData[] = [
  {
    id: 'ha-noi',
    label: 'Hà Nội',
    description: 'Trái tim lịch sử và chính trị của cả nước.',
    body:
      'Hà Nội lưu giữ tầng tầng lớp lớp di sản, từ khu phố cổ đến quảng trường Ba Đình, nơi khai sinh nước Việt Nam mới.',
    shapeClass: 'map-region--hanoi',
  },
  {
    id: 'hue',
    label: 'Huế',
    description: 'Kinh đô cổ, nơi hội tụ chiều sâu văn hóa.',
    body:
      'Huế mang dáng dấp trầm mặc của hoàng thành, tiếng chuông chùa và dòng Hương giang gợi lại ký ức về triều đại vàng son.',
    shapeClass: 'map-region--hue',
  },
  {
    id: 'da-nang',
    label: 'Đà Nẵng',
    description: 'Cửa ngõ chiến lược của miền Trung.',
    body:
      'Đà Nẵng là nơi mở đầu cuộc kháng chiến chống xâm lược thế kỷ XIX, đồng thời là trung tâm giao thương sôi động.',
    shapeClass: 'map-region--danang',
  },
  {
    id: 'tay-nguyen',
    label: 'Tây Nguyên',
    description: 'Âm vang đại ngàn và chiến dịch then chốt.',
    body:
      'Tây Nguyên là nơi bắt đầu cuộc Tổng tiến công mùa xuân 1975, khởi đầu chuỗi thắng lợi dẫn đến thống nhất.',
    shapeClass: 'map-region--taynguyen',
  },
  {
    id: 'tp-hcm',
    label: 'TP. Hồ Chí Minh',
    description: 'Thành phố của năng lượng đổi mới.',
    body:
      'Thành phố Hồ Chí Minh là điểm hội tụ của tinh thần năng động, nơi ghi dấu thắng lợi cuối cùng mùa xuân 1975.',
    shapeClass: 'map-region--saigon',
  },
]

const StoryPage = () => {
  const [progress, _setProgress] = useState(0)
  const [activeIndex, _setActiveIndex] = useState(0)
  const [activeRegion, setActiveRegion] = useState<MapRegionData | null>(null)
  const { setMode } = useCursor()

  const timelineLabels = sections.map((section) => section.year)

  return (
    <main className="story-shell">
      <TimelineLine
        labels={timelineLabels}
        progress={progress}
        activeIndex={activeIndex}
      />
      <div className="progress-rail">
        <span className="progress-rail__fill" style={{ width: `${progress * 100}%` }} />
      </div>
        {sections.map((section, index) => (
          <StorySection
            key={section.id}
            {...section}
            progress={progress}
            sectionIndex={index}
            totalSections={sections.length}
          >
            {section.id === 'map' ? (
              <div className="map-stage">
                <div
                  className="map-shell"
                  onMouseEnter={() => setMode('map')}
                  onMouseLeave={() => setMode('default')}
                  style={{ ['--map-image' as string]: `url(${mapImage})` }}
                >
                  {mapRegions.map((region) => (
                    <MapRegion
                      key={region.id}
                      label={region.label}
                      description={region.description}
                      onSelect={() => setActiveRegion(region)}
                      shapeClass={region.shapeClass}
                    />
                  ))}
                  <span className="map-glow" />
                </div>
              </div>
            ) : null}
          </StorySection>
        ))}
      <StoryModal
        isOpen={!!activeRegion}
        title={activeRegion?.label ?? ''}
        body={activeRegion?.body ?? ''}
        onClose={() => setActiveRegion(null)}
      />
    </main>
  )
}

export default StoryPage

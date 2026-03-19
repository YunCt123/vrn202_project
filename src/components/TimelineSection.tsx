import { motion } from 'framer-motion'

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
}

const timelineItemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function TimelineSection() {
  const events = [
    {
      date: '1858 - 1930',
      title: 'Bối cảnh lịch sử và chuẩn bị thành lập Đảng',
      description:
        'Việt Nam trở thành thuộc địa nửa phong kiến; các phong trào Cần Vương, Đông Du, Duy Tân lần lượt thất bại. Nguyễn Ái Quốc tìm ra con đường giải phóng dân tộc theo chủ nghĩa Mác-Lênin và chuẩn bị về tư tưởng, tổ chức cho sự ra đời của Đảng.'
    },
    {
      date: '1930',
      title: 'Thành lập Đảng và Cương lĩnh đầu tiên',
      description:
        'Hội nghị hợp nhất tại Hương Cảng do Nguyễn Ái Quốc chủ trì đã thống nhất các tổ chức cộng sản, thông qua Cương lĩnh chính trị đầu tiên, xác lập mục tiêu độc lập dân tộc gắn với quyền lợi của nhân dân lao động.'
    },
    {
      date: '1930 - 1935',
      title: 'Xô Viết Nghệ Tĩnh và phục hồi tổ chức Đảng',
      description:
        'Phong trào cách mạng 1930-1931 bùng nổ với đỉnh cao là Xô Viết Nghệ Tĩnh. Sau khủng bố trắng, Đảng từng bước khôi phục hệ thống tổ chức và tổ chức thành công Đại hội I năm 1935.'
    },
    {
      date: '1936 - 1939',
      title: 'Phong trào dân chủ Đông Dương',
      description:
        'Trong bối cảnh thế giới chống phát xít, Đảng điều chỉnh chiến lược, đẩy mạnh đấu tranh công khai, nửa công khai để đòi dân sinh, dân chủ, chống chiến tranh và mở rộng mặt trận đoàn kết quần chúng.'
    },
    {
      date: '1939 - 1945',
      title: 'Chuyển hướng chiến lược và Cách mạng Tháng Tám',
      description:
        'Đảng đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, xây dựng lực lượng chính trị - vũ trang, thành lập Việt Minh, chớp thời cơ Tổng khởi nghĩa tháng 8/1945, giành chính quyền trên cả nước.'
    },
    {
      date: '1945 - 1954',
      title: 'Kháng chiến chống thực dân Pháp',
      description:
        'Nhà nước non trẻ vượt qua muôn vàn khó khăn, tiến hành kháng chiến toàn dân - toàn diện. Đỉnh cao là chiến thắng Điện Biên Phủ (1954), buộc Pháp ký Hiệp định Geneve.'
    },
    {
      date: '1954 - 1975',
      title: 'Kháng chiến chống Mỹ, thống nhất đất nước',
      description:
        'Miền Bắc xây dựng CNXH, miền Nam đấu tranh giải phóng. Sau các bước ngoặt chiến lược, Chiến dịch Hồ Chí Minh toàn thắng ngày 30/4/1975, đất nước thống nhất.'
    },
    {
      date: '1975 - 1986',
      title: 'Thống nhất đất nước và vượt qua khủng hoảng',
      description:
        'Cả nước đi lên CNXH trong điều kiện hậu chiến và bao vây cấm vận, đối mặt khó khăn kinh tế - xã hội và chiến tranh biên giới. Đây là bối cảnh trực tiếp dẫn đến yêu cầu đổi mới toàn diện.'
    },
    {
      date: '1986 - 1995',
      title: 'Đại hội VI và khởi đầu Đổi mới',
      description:
        'Đại hội VI mở ra đường lối đổi mới toàn diện, chuyển sang cơ chế thị trường định hướng XHCN, từng bước ổn định kinh tế vĩ mô, mở rộng đối ngoại và tạo nền tảng hội nhập.'
    },
    {
      date: '1995 - 2006',
      title: 'Hội nhập khu vực và mở rộng quan hệ quốc tế',
      description:
        'Việt Nam bình thường hóa quan hệ với Hoa Kỳ (1995), gia nhập ASEAN (1995), đẩy mạnh công nghiệp hóa, hiện đại hóa và hoàn thiện thể chế phát triển trong thời kỳ mới.'
    },
    {
      date: '2006 - 2021',
      title: 'Hội nhập toàn cầu, phát triển và chỉnh đốn Đảng',
      description:
        'Gia nhập WTO (2006), kinh tế tăng trưởng gắn với tái cơ cấu. Các nhiệm kỳ XI, XII thúc đẩy xây dựng, chỉnh đốn Đảng và phòng chống tham nhũng, tạo chuyển biến mạnh về quản trị quốc gia.'
    },
    {
      date: '2021 - Nay',
      title: 'Đại hội XIII và tầm nhìn đến 2045',
      description:
        'Đại hội XIII xác định mục tiêu đến năm 2045 đưa Việt Nam thành nước phát triển, thu nhập cao. Giai đoạn 2024 đến nay tiếp tục kiện toàn lãnh đạo, thúc đẩy chuyển đổi số và phát triển bền vững trong bối cảnh cạnh tranh toàn cầu.'
    }
  ]

  return (
    <section className="section section-cream" id="timeline">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Dòng thời gian lịch sử
        </motion.h2>
        <div className="timeline">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={index % 2 === 0 ? timelineItemVariants : timelineItemVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className="timeline-marker"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.5, backgroundColor: '#fde047' }}
              ></motion.div>
              <motion.div
                className="timeline-content"
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                <span className="timeline-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

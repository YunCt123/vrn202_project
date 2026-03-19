import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export function ExploreSection() {
  const cards = [
    {
      icon: '📖',
      title: 'Giai đoạn hình thành',
      description: 'Bối cảnh 1858-1930, hành trình chuẩn bị tư tưởng và tổ chức để thành lập Đảng năm 1930',
      border: 'red',
      link: '/timeline'
    },
    {
      icon: '⚔️',
      title: 'Cách mạng và kháng chiến',
      description: 'Toàn cảnh 1930-1975 từ Cách mạng Tháng Tám đến hai cuộc kháng chiến giành độc lập, thống nhất',
      border: 'gold',
      link: '/timeline'
    },
    {
      icon: '🌐',
      title: 'Đổi mới và hội nhập',
      description: 'Các bước chuyển từ 1986 đến nay: đổi mới kinh tế, hội nhập khu vực và toàn cầu',
      border: 'bronze',
      link: '/about'
    },
    {
      icon: '📅',
      title: 'Dòng thời gian',
      description: 'Hệ thống mốc năm theo từng giai đoạn, có bối cảnh và ý nghĩa lịch sử cụ thể',
      border: 'red-light',
      link: '/timeline'
    }
  ]

  return (
    <section className="section section-cream" id="explore">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Khám phá nội dung
        </motion.h2>
        <motion.div
          className="cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              data-border={card.border}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="card-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <Link to={card.link} className="card-link">
                Tìm hiểu thêm →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

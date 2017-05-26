-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: screenDB
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `program_style`
--

DROP TABLE IF EXISTS `program_style`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `program_style` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `style` varchar(255) NOT NULL COMMENT '交互区样式',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `program_id` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL COMMENT '每种组件对应的type值。 \n1: 轮播    2:button。  3: 内容区 文字    4:内容区 图片。 5:内容区 视频',
  `position` varchar(255) DEFAULT NULL COMMENT '组件在节目中相对的位置',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program_style`
--

LOCK TABLES `program_style` WRITE;
/*!40000 ALTER TABLE `program_style` DISABLE KEYS */;
INSERT INTO `program_style` VALUES (1,'123','23','2017-05-13 14:22:41','1','1','{\"left\":100,\"top\":200}'),(2,'0','{\"height\":100,\"width\":100,\"name\":\"name\",\"href\":\"href\",\"ID\":\"ID\"}','2017-05-13 14:26:47','1',NULL,NULL),(3,'0','{\"height\":100,\"width\":100}','2017-05-15 12:16:00','3',NULL,NULL),(4,'0','{\"height\":100,\"width\":100,\"name\":\"name\",\"href\":\"href\"}','2017-05-15 12:16:12','32',NULL,NULL),(5,'0','{\"height\":100,\"width\":100,\"cont\":\"cont\",\"path\":\"path\",\"type\":1}','2017-05-15 12:16:28','3',NULL,NULL),(6,'0','{\"height\":100,\"width\":100}','2017-05-15 12:21:45','32',NULL,NULL),(7,'0','{\"height\":100,\"width\":100,\"name\":\"name\",\"href\":\"href\"}','2017-05-15 12:38:07','12',NULL,NULL);
/*!40000 ALTER TABLE `program_style` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-26 23:27:40

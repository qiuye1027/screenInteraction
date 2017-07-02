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
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `program` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL COMMENT '所属人id',
  `name` varchar(255) DEFAULT NULL COMMENT '节目名称',
  `height` varchar(255) DEFAULT NULL COMMENT '节目存放地址',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `width` varchar(45) DEFAULT NULL,
  `bgimg` varchar(255) DEFAULT NULL COMMENT '节目背景图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='节目管理表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program`
--

LOCK TABLES `program` WRITE;
/*!40000 ALTER TABLE `program` DISABLE KEYS */;
INSERT INTO `program` VALUES (24,'1','test','1233','2017-06-03 13:32:01','1233','fileupload//pic4.jpg'),(25,'1','qwer','1233','2017-06-03 23:44:13','1233','fileupload//pic4.jpg'),(26,'1','qwe1','1233','2017-06-03 23:46:53','1233','fileupload//pic4.jpg'),(27,'1','ads1','1233','2017-06-03 23:51:18','1233','fileupload//pic4.jpg'),(28,'1','test01','1233','2017-06-04 02:39:53','1233','fileupload//pic4.jpg'),(29,'0','zzch','1920','2017-06-04 03:05:28','1080',''),(30,'0','zzch','1920','2017-06-04 03:05:58','1080',''),(31,'0','','1920','2017-06-04 03:17:46','1080','fileupload//红色花纹.png'),(32,'0','zzch','1920','2017-06-04 03:19:54','1080','fileupload//红色花纹.png'),(33,'0','','1920','2017-06-04 03:22:58','1080','fileupload//image/image/image/image/image/红色花纹.png'),(34,'0','test11','1920','2017-06-04 03:23:44','1080','fileupload//红色花纹.png'),(35,'0','','1920','2017-06-04 03:30:10','1080','fileupload//红色花纹.png'),(36,'0','test23','1920','2017-06-04 03:32:19','1020','fileupload//红色花纹.png'),(37,'0','','1080','2017-06-04 03:56:20','1920','fileupload//红色花纹.png');
/*!40000 ALTER TABLE `program` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-02 10:56:09

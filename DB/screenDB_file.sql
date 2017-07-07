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
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '文件名',
  `size` varchar(255) DEFAULT NULL COMMENT '文件大小（KB）',
  `type` varchar(255) DEFAULT NULL COMMENT '文件类型',
  `path` varchar(255) DEFAULT NULL COMMENT '文件路径',
  `folder_id` varchar(255) DEFAULT NULL COMMENT '所属文件夹id',
  `user_id` varchar(255) DEFAULT NULL COMMENT '创建人id',
  `is_share` int(11) DEFAULT NULL COMMENT '是否共享（0:否；1:是）',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '上传时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='上传文件表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (14,'注册篇.png','4.76 KB','image/png','static/fileupload/img1/img1-1','19','0',0,'2017-04-30 15:07:06'),(16,'20170421-新手引导页面.psd','13.8 MB','image/vnd.adobe.photoshop','static/fileupload','0','0',0,'2017-04-30 15:18:24'),(17,'buyLoading.png','18.9 KB','image/png','static/fileupload','0','0',0,'2017-04-30 15:19:13'),(18,'个人权益记录定制_参保人员缴费信息20170426003325.pdf','264 KB','application/pdf','static/fileupload','0','0',0,'2017-04-30 15:20:13'),(19,'weixin.css','19.6 KB','text/css','static/fileupload','0','0',0,'2017-04-30 15:21:43');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-04 23:39:48

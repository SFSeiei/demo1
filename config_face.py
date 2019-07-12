import mysql.connector

DEBUG=True

# 配置数据库连接
DIALECT = 'mysql'
# DRIVER = 'pymysql'
DRIVER = 'mysqlconnector'
USERNAME = 'root'
PASSWORD = 'root'
HOST = '127.0.0.1'
PORT = '3306'
DATABASE = 'facenet'

SQLALCHEMY_DATABASE_URI = "{}+{}://{}:{}@{}:{}/{}?charset=utf8".format(DIALECT,DRIVER,USERNAME,PASSWORD,HOST,PORT,DATABASE)

SQLALCHEMY_TRACK_MODIFICATIONS = False



# 配置flask 引用
from flask import Flask
from flask_sqlalchemy import  SQLAlchemy
import config_face
import models_orm


app = Flask(__name__)

app.config.from_object(config_face)

app.secret_key = 'zys'


db = SQLAlchemy(app)


# 设置extract_vector_facenet_ad.py 和  extract_vector_facenet_teacher.py   参数

image_files = app.root_path + "/data/test_imagesInExcel/"
img_output_path = app.root_path + "/data/faceImagesFromAd/"
imageSize = 160
imageMargin = 44
image_gpu_memory_fraction = 1.0
image_batch_size = 200
image_face_low_size = 90

image_files_t = app.root_path + "/data/database_496/"
# image_files_t = app.root_path + "/data/test/"
# img_output_path_t = app.root_path + "/data/talent_test/"
img_output_path_t = app.root_path + "/data/talents_496/"
model = app.root_path + "/facenet_master/src/models/20170511-185253"
image_batch_size_t = 200






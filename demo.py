from flask import Flask,render_template,redirect,url_for,request,jsonify
from flask_sqlalchemy import  SQLAlchemy
import config_face
import os
import K_NearestNeighbors as kn
import models_orm
import time
import random
import globalvar as gl
from werkzeug.utils import secure_filename
from facenet_master.src import extract_vector_facenet_ad
from facenet_master.src import extract_vector_facenet_teacher

loadModelAndGetFeatures = extract_vector_facenet_ad.GetFeatures() # 提前加载MODEL


app = Flask(__name__)

app.config.from_object(config_face)

app.secret_key = 'zys'


db = SQLAlchemy(app)

#测试db连接
# db.create_all()


@app.route('/')
def hello_world():
    return render_template("begin.html")

@app.route('/imageNotFound')
def imageNotFound():
    return render_template("imageNotFound.html")

@app.route('/talentMasterSearch')
def talentMasterSearch():
    return render_template("talentMasterSearch.html")



@app.route('/imageOperation')
def imageOperation():

    imgs = os.listdir(app.root_path + "/static/assets/img/gallery")

    return render_template("imageOperation.html",imgs=imgs)



@app.route('/getProcess')
def getProcess():

    print("gl.process:",gl.get_value('process'))

    result = {}
    result['process'] = gl.get_value('process')
    result['finishFlg'] = gl.get_value('finishFlg')

    return jsonify(result)


@app.route('/getFeatures')
def getFeatures():

    # print('getFeatures')
    gl.set_value('process', 0)
    gl.set_value('finishFlg', 0)

    # os.system("python " + app.root_path + "/facenet_master/src/extract_vector_facenet_teacher.py " + app.root_path + "/facenet_master/src/models/20170511-185253 " + app.root_path + "/data/ori_imgs/ --pkl_path " + app.root_path + "/talent_database_500_margin_all.pkl --batch_size 200 --img_output_path " + app.root_path + "/data/talents/ --face_low_size 90")
    extract_vector_facenet_teacher.start()

    return redirect(url_for("workDetail", select1="0"))

@app.route('/faceRecognitionPage')
def faceRecognitionPage():
    return render_template("faceRecognitionPage.html")

@app.route('/faceRecognition')
def faceRecognition():

    # ad_features attach

    gl.set_value('process', 0)
    gl.set_value('finishFlg', 0)

    reps = loadModelAndGetFeatures.start()
    kn.facenet_test(reps)

    # dict1 = {}
	#
    # dict1['fileCounts'] = 500
    # dict1['faceCounts'] = 350
    # dict1['recognitionCounts'] = 200
    # dict1['unrecognitionCounts'] = 150

    return redirect(url_for("workDetail", select1="0"))
    # return render_template("faceRecognitionPage.html",result = dict1)

@app.route('/workDetail/<select1>', methods=['POST','GET'])
def workDetail(select1):

    data = []

    result1 = {}
    result1['talent_image'] = '../static/assets/img/DCKFJ0E0_0.jpg'
    result1['talent_vr'] = 'APNA'
    result1['talent_name'] = '指原　莉乃'
    result1['talent_name2'] = 'ｻｼﾊﾗ ﾘﾉ'
    result1['sex'] = '女'
    result1['birth'] = '19921121'
    result1['office'] = '太田プロダクション'
    result1['genre'] = 'アイドル、アイドルプロデューサー'
    result1['mark'] = 'HKT48のメンバー'
    result1['loginDate'] = '20190708'

    result2 = {}
    result2['talent_image'] = '../static/assets/img/ACYP_0003_b_0.jpg'
    result2['talent_vr'] = 'ACYP'
    result2['talent_name'] = '綾瀬　はるか'
    result2['talent_name2'] = 'ｱﾔｾ ﾊﾙｶ'
    result2['sex'] = '女'
    result2['birth'] = '19850324'
    result2['office'] = 'ホリプロ'
    result2['genre'] = '女優、歌手'
    result2['mark'] = '2001年ドラマ『金田一少年の事件簿』で女優デビュー'
    result2['loginDate'] = '20190708'

    result3 = {}
    result3['talent_image'] = '../static/assets/img/AP31_0003_y_0.jpg'
    result3['talent_vr'] = 'AP31'
    result3['talent_name'] = '有村　架純'
    result3['talent_name2'] = 'ｱﾘﾑﾗ ｶｽﾐ'
    result3['sex'] = '女'
    result3['birth'] = '19930213'
    result3['office'] = 'フラ－ム'
    result3['genre'] = '女優'
    result3['mark'] = '姉は有村藍里'
    result3['loginDate'] = '20190708'

    result4 = {}
    result4['talent_image'] = '../static/assets/img/DCKFJ0E0_0.jpg'
    result4['talent_vr'] = '素材001'
    result4['talent_name'] = '未知'
    result4['talent_name2'] = '未知'
    result4['sex'] = '未知'
    result4['birth'] = '未知'
    result4['office'] = '未知'
    result4['genre'] = '未知'
    result4['mark'] = '未知'
    result4['loginDate'] = '20190708'

    result5 = {}
    result5['talent_image'] = '../static/assets/img/DCKFJ0E0_0.jpg'
    result5['talent_vr'] = '素材002'
    result5['talent_name'] = '未知'
    result5['talent_name2'] = '未知'
    result5['sex'] = '未知'
    result5['birth'] = '未知'
    result5['office'] = '未知'
    result5['genre'] = '未知'
    result5['mark'] = '未知'
    result5['loginDate'] = '20190708'

    result6 = {}
    result6['talent_image'] = '../static/assets/img/DCKFJ0E0_0.jpg'
    result6['talent_vr'] = '素材003'
    result6['talent_name'] = '未知'
    result6['talent_name2'] = '未知'
    result6['sex'] = '未知'
    result6['birth'] = '未知'
    result6['office'] = '未知'
    result6['genre'] = '未知'
    result6['mark'] = '未知'
    result6['loginDate'] = '20190708'

    for i in range (20):
        data1 = {}

        data1['newsid'] = "GASDG" + str(i)
        data1['goup'] = "HKT48"
        data1['media'] = "1"
        data1['flg'] = select1

        data2 = {}
        data2['newsid'] = "UnkownTalent_" + str(i)
        data2['goup'] = "HKT48"
        data2['media'] = "2"
        data2['flg'] = select1

        count = random.randint(1,3)

        for j in range (count):

            results = []
            results2 = []

            if count ==3:

                results.append(result1)
                results.append(result2)
                results.append(result3)

                results2.append(result4)
                results2.append(result5)
                results2.append(result6)

                continue
            elif count==2:

                results.append(result1)
                results.append(result2)

                results2.append(result4)
                results2.append(result5)

                continue
            elif count==1 :

                results.append(result1)

                results2.append(result4)

                continue

        # print(len(results))
        if select1== '0' or select1 == '1':
            data1['results']= results
            data.append(data1)

        elif select1 == '2':
            data2['results'] = results2
            data.append(data2)

    # print(data, type(data))
    if select1 == '0' or select1 == '1':
        # print(data)
        return render_template("workDetail.html", data=data)
    elif select1 == '2':
        # print(data)
        return render_template("workDetail.html", data=data)



@app.route('/imageValidation')
def imageValidation():
    return render_template("imageValidation.html")


@app.route('/addGroup')
def addGroup():
    return render_template("addGroup.html")

@app.route('/image_del/<value>')
def image_del(value):
    # print(value)
    # 重定向
    return redirect(url_for("imageOperation"))


#设置允许的文件格式
ALLOWED_EXTENSIONS = set(['jpg', 'JPG'])

app.config['UPLOAD_FOLDER'] = app.root_path + '/static/uploads/'

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS




@app.route('/upload', methods=['POST'])
def upload():
    imgs = os.listdir(app.root_path + "/static/assets/img/gallery")
    # Get the name of the uploaded files
    uploaded_files = request.files.getlist("file[]")
    filenames = []
    for file in uploaded_files:
        # Check if the file is one of the allowed types/extensions
        if file and allowed_file(file.filename):
          # Make the filename safe, remove unsupported chars
          filename = secure_filename(file.filename)
          # Move the file form the temporal folder to the upload
          # folder we setup
          print(app.root_path)
          file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
          # Save the filename into a list, we'll use it later
          filenames.append(filename)
          # Redirect the user to the uploaded_file route, which
          # will basicaly show on the browser the uploaded file
        # Load an html page with a link to each uploaded file
        #   print(filenames)

    return render_template('imageOperation.html', filenames=filenames, imgs=imgs)





if __name__ == '__main__':
    app.run()

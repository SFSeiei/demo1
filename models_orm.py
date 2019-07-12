from flask import Flask

from flask_sqlalchemy import  SQLAlchemy

import config_face

app = Flask(__name__)

app.config.from_object(config_face)

app.secret_key = 'zys'


db = SQLAlchemy(app)


#测试db连接
# db.create_all()




# タレントマスタ(talent_master)
class TalentMaster(db.Model):
    __tablename__ = 'talent_master'

    # タレントコード
    talentCode = db.Column(db.Integer,primary_key=True,autoincrement=True)
    # タレントコード（VR）
    talentCode_vr = db.Column(db.String(4),nullable=True)
    # タレント名
    talentName = db.Column(db.String(50),nullable=False)
    # タレント名（読み）
    talentName2 = db.Column(db.String(50),nullable=False)
    # 性別
    sex = db.Column(db.String(1),nullable=False)
    # 誕生日
    birth = db.Column(db.DateTime(8),nullable=True)
    # オフィス名
    office = db.Column(db.String(250),nullable=True)
    # ジャンル
    genre = db.Column(db.String(500),nullable=True)
    # 備考
    mark = db.Column(db.String(1000),nullable=True)



# グループマスタ（group_master）
class Group(db.Model):

    __tablename__ = 'group_master'

    # グループコード
    groupCode = db.Column(db.Integer,primary_key=True)
    # グループ名
    groupName = db.Column(db.String(10),nullable=False)
    # グループ名（読み）
    groupName2 = db.Column(db.String(50),nullable=False)
    # 備考
    mark = db.Column(db.String(1000),nullable=True)


# タレント・グループ（t_talent_group）
class T_Talent_Group(db.Model):

    __tablename__ = 't_talent_group'

    # 主キー
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # タレントコード
    talentCode = db.Column(db.Integer, db.ForeignKey('talent_master.talentCode'), nullable=False)
    # グループコード
    groupCode = db.Column(db.Integer, db.ForeignKey('group_master.groupCode'), nullable=False)

# タレント特徴値マスタ（talentFeatures_master）
class TalentFeaturesMaster(db.Model):
    __tablename__ = 'talentFeatures_master'

    # 主キー
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # 顔ファイルID
    facePath = db.Column(db.String(100))
    # タレントコード
    talentCode = db.Column(db.Integer, db.ForeignKey('talent_master.talentCode'), nullable=False)
    # 特徴値
    features = db.Column(db.Text(65532),nullable=False)


# 同一判定（t_unkownTalent）
class T_unkownTalant(db.Model):
    __tablename__ = 't_unkownTalent'

    # 主キー
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    # 同一ID
    sameTalentId= db.Column(db.String(50))
    # 素材コード
    adCode = db.Column(db.String(10))
    # 顔ファイルID
    facePath = db.Column(db.String(100))
    # 特徴値
    features = db.Column(db.Text(65532), nullable=False)

# 広告素材・タレント（t_ad_talents）
class T_Ad_Talants(db.Model):
    __tablename__ = 't_ad_talents'

    # 主キー
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    # 素材コード
    adCode= db.Column(db.String(10))
    # 媒体区分
    mediaCode = db.Column(db.String(1))
    # タレントコード
    talentCode = db.Column(db.Integer, db.ForeignKey('talent_master.talentCode'), nullable=True)
    # 顔ファイルID
    facePath = db.Column(db.String(100))
    # 特徴値
    features = db.Column(db.Text(65532), nullable=False)
    # 登録日时
    createTime = db.Column(db.DateTime(8), nullable=True)
    # 更新日时
    updateTime = db.Column(db.DateTime(8), nullable=True)
    # 確認済みフラグ
    confirmFlg = db.Column(db.String(1))
    # 削除フラグ
    deleteFlg = db.Column(db.String(1))


db.create_all()

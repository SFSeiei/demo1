import pickle
import re

from sklearn.neighbors import NearestNeighbors
from config_face import *
import numpy as np


def to_array(arg):

	arg = arg.replace("\n", " ")

	# 开头[spage + ...情况处理
	if arg[1:2] == ' ':
		arg2 = arg[2:-1]
	else:
		arg2 = arg[1:-1]

	# a = re.sub("( ){1,}", " ", arg2)
	#
	# b = eval(a.replace(" ", ","))
	#
	# c = np.array(b)

	return np.array(eval(re.sub("( ){1,}", " ", arg2).replace(" ", ",")))

def getTeacher_features():

	t_features = models_orm.TalentFeaturesMaster.query.all()
	rlt_keys_list = [s.faceCode for s in t_features]
	rlt_values_list = [s.features for s in t_features]
	rlt_values_list = [to_array(s) for s in rlt_values_list]

	return rlt_keys_list, rlt_values_list

def facenet_test(reps):

	print("広告数:",len(reps.keys()))
	##############################################################

	# 获取t_features
	rlt_keys_list, rlt_values_list = getTeacher_features()

	test_rlt_id_list=list(reps.keys())
	test_rlt_list=list(reps.values())

	predict_num = 10

	# nn = NearestNeighbors(metric='cosine')
	# nn.fit(rlt_values_list)
	# dists, result = nn.kneighbors(test_rlt_list, n_neighbors=predict_num)

	#
	nn = NearestNeighbors(n_neighbors=predict_num)

	nn.fit(rlt_values_list)
	dists, result = nn.kneighbors(test_rlt_list)

	print(dists)
	print(result)


	
	#version 2
	
	# img_face_predict3_dict = {}

	# for i in range(len(test_rlt_id_list)):

		# key = test_rlt_id_list[i]

		# locations = [s.span() for s in re.finditer(key.split('_')[-1], key)]

		# list1 = []
		# face_predict_dict = {}
		
		# for j in range (3):
			# list2 = []
			# list2.append(rlt_keys_list[list(result[i])[j]])
			# list2.append(list(dists[i])[j])
	  
			# face_predict_dict.setdefault(int(key[locations[-1][0]:]),[]).append(list2)


		# img_face_predict3_dict.setdefault(key[0:locations[-1][0]-1],[]).append(face_predict_dict)
		
	
	
	# version 3
	img_face_predict3_dict = {}



	for i in range(len(test_rlt_id_list)):
		# print(test_rlt_id_list[i])
	#     img = cv2.imread("./facenet_faces_output_one_face_new/" + test_rlt_id_list[i] + '.jpg')
	#     plt.imshow(img)
	#     plt.show()
		
		dict2 = {}
		key = test_rlt_id_list[i]
		
		
		face_predict_dict = {}
		
		locations = [s.span() for s in re.finditer(key.split('_')[-1], key)]
		
		
		for j in range(predict_num):
	#         print(result[i][j])

			value = []
			value.append(rlt_keys_list[result[i][j]])
			value.append(list(dists[i])[j])
			
			dict2.setdefault(rlt_keys_list[result[i][j]][0:4],[]).append(value)

		# print(dict2)
		
		# for k,v in dict2.items():
			
	#         print(k,": ",dict2[k])
			
			# print(k,": ",len(dict2[k]))
			
		# 根据前10 近邻个数排序
		count3 =0
		for k1 in sorted(dict2, key=lambda k1: len(dict2[k1]), reverse=True):
			if count3 < 3:
				# print(k1)
		#         print(dict2[k1])

				face_predict_dict.setdefault(key[locations[-1][0]:],[]).append(dict2[k1][0][0])
				count3 += 1
		# print(face_predict_dict)
	#         # 计算距离
	#         distance = 0
	#         for i in range(len(dict2[k1])):
	#             distance = distance +  1/dict2[k1][i][1]
	#         print(distance)
		img_face_predict3_dict.setdefault(key[0:locations[-1][0]-1],[]).append(face_predict_dict)  
    

		

	print(img_face_predict3_dict)
	# return  img_face_predict3_dict
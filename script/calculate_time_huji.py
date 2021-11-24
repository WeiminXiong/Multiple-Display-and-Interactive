import json
from time import time

huji = False

file_path = './data.json'
if huji:
    save_path = './script/time_huji.json'
else:
    save_path = './script/time_kemu.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

time_dict = {}
time_list = []
if huji:
    for item in data:
        if item['年份'] not in time_dict:
            time_dict[item['年份']] = {}
            time_dict[item['年份']]['民籍'] = time_dict[item['年份']]["军籍"] = time_dict[item['年份']]["监籍"] = time_dict[item['年份']]["官籍"] = \
                time_dict[item['年份']]["匠籍"] = time_dict[item['年份']]["灶籍"] = time_dict[item['年份']]["站籍"] = 0
        time_dict[item['年份']][item['户籍']] += 1
    for key, value in time_dict.items():
        li = []
        li.append(int(key))
        for k, v in value.items():
            li.append(v)
        time_list.append(li)
else:
    for item in data:
        if item['年份'] not in time_dict:
            time_dict[item['年份']] = {}
            time_dict[item['年份']]['诗经'] = time_dict[item['年份']]["书经"] = time_dict[item['年份']]["易经"] = time_dict[item['年份']]["礼记"] = \
                time_dict[item['年份']]["春秋"] = 0
        time_dict[item['年份']][item['科目']] += 1
    for key, value in time_dict.items():
        li = []
        li.append(int(key))
        for k, v in value.items():
            li.append(v)
        time_list.append(li)

def f(a, b):
    return a[0] - b[0]
time_list.sort()
with open(save_path, 'w', encoding='utf-8') as f:
    f.write(json.dumps(time_list))
import json

debug = True

if debug:
    data_path = "./script/save_data.json"
else:
    data_path = "./script/data.json"
save_path = "./script/save_data.json"

with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

kemu = []
save = []
for item in data:
    if debug:
        if item['科目'] not in kemu:
            kemu.append(item['科目'])
    else:
        if item['科目'] == "禮記\u3000" or item['科目'] == "禮記" or item['科目'] == "禮紀" or item['科目'] == "禮記":
            item['科目'] = "礼记"
            save.append(item)
        if item['科目'] == "春秋" or item['科目'] == '春秋' or item['科目'] == "春秋\u3000":
            item['科目'] = "春秋"
            save.append(item)
        if item['科目'] == "書經" or item['科目'] == '書經\u3000' or item['科目'] == "書經":
            item['科目'] = "书经"
            save.append(item)
        if item['科目'] == "詩經" or item['科目'] == '詩經' :
            item['科目'] = "诗经"
            save.append(item)
        if item['科目'] == "易經" or item['科目'] == '易經\u3000' :
            item['科目'] = "易经"
            save.append(item)
if debug:
    print(kemu)
else:
    with open(save_path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(save, ensure_ascii=False))
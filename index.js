/*
	東京公共交通オープンデータアプリコンテスト提供APIの利用ライブラリのテストプログラム
	author: kdotk.com 2018
	licence: MIT licence
*/

function receiver(error, response, body)
{
	console.log('error='+error);
	data = JSON.parse(body );
	
	for (var i=0; i<data.length; ++i) {
		console.log('data index='+i);		
		for (var p in data[i]) {
			console.log('property='+p+'  value='+data[i][p]);
		}
	}

	console.log('response status code='+response.statusCode);
} 

var apiKey = '開発者サイトで取得したトークンを記述してください';

var api = require('./api_tools.js');

//type = 'odpt:Train';
//type = 'odpt:PassengerSurvey';
type = 'odpt:Station';
//type = 'odpt:TrainInformation';
//type = 'odpt:Railway';

operator = 'odpt.Operator:JR-East';
//operator = 'odpt.Operator:TokyoMetro';
//operator = 'odpt.Operator:Toei';
//operator = 'odpt.Operator:Tokyu';
//operator = 'odpt.Operator:Odakyu';

predicate = { 'odpt:operator': operator };
//predicate = { 'odpt:operator': operator , 'odpt:railway':'odpt.Railway:JR-East.Nambu' };

//test 1: 条件を指定してデータを検索
api.getSearchData(apiKey, type, predicate, receiver);

//test 2: ユニークなidを指定して個別データを取得
//api.getSpecifiedData(apiKey, 'urn:ucode:_00001C00000000000001000003102445', receiver );

//test 3: 位置情報を指定してデータを検索
//api.getSearchPlace(apiKey, type, 139.251468, 35.692678, 5000, receiver);




/*
	東京公共交通オープンデータアプリコンテスト提供APIの利用ライブラリ
	author: kdotk.com 2018
	licence: MIT licence
*/

//データ検索API
exports.getSearchData = function(apiKey, type, predicate, receiver){
	
	const API_BASE_URL =  'https://api-tokyochallenge.odpt.org/api/v4/';

	url = API_BASE_URL+type;
	query = {};
	
	for (var p in predicate) {
		query[p] = predicate[p];
	}

	query['acl:consumerKey'] = apiKey;

	var client = require('request');

	client.get({
		url: url,
		method: 'GET',
		qs: query
	},function(error, response, body){
		receiver(error, response, body);
	});
}

//データ取得API
exports.getSpecifiedData = function(apiKey, uri, receiver){
	
	const API_BASE_URL =  'https://api-tokyochallenge.odpt.org/api/v4/datapoints/';
	url = API_BASE_URL+uri;
	query = {};

	query['acl:consumerKey'] = apiKey;

	var client = require('request');

	client.get({
		url: url,
		method: 'GET',
		qs: query

	},function(error, response, body){
		receiver(error, response, body);
	});

}

//地理情報検索API
exports.getSearchPlace = function(apiKey, type, lon, lat, radius, receiver){
	
	const API_BASE_URL =  'https://api-tokyochallenge.odpt.org/api/v4/places/';

	url = API_BASE_URL+type;
	query = {};

	query['lon'] = lon;
	query['lat'] = lat;
	query['radius'] = radius;
	
	query['acl:consumerKey'] = apiKey;

	var client = require('request');

	client.get({
		url: url,
		method: 'GET',
		qs: query

	},function(error, response, body){
		receiver(error, response, body);
	});

}



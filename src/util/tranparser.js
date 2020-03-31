import Xml2Js from 'xml-js';

const opt = { isSpaceReplace: true, repaceString: '□' };

const tranParser = {
  parseTran(xmlTran) {
    //root付与
    const tran = '<root>' + xmlTran + '</root>';
    const jsonStr = Xml2Js.xml2json(tran, { compact: true, spaces: 4 });
    // console.log("jsonStr", jsonStr);

    const obj = JSON.parse(jsonStr).root;
    // console.log("parsedObj", obj);

    const res = {
      TRAN_TBL: getTranTbl(obj),
      ITEM_TBL: { ITEM_REC: getItemTbl(obj) },
      POINT_TBL: { POINT_REC: getPointTbl(obj) },
      MM_TBL: { MM_REC: getMmTbl(obj) },
      CREDIT_TBL: { CREDIT_REC: getCreditTbl(obj) },
      MEDIA_TBL: { MEDIA_REC: getMediaTbl(obj) }
    };
    // console.log("result obj", res);
    return res;
  }
};

function getCreditTbl(obj) {
  if (obj.CREDIT_TBL && obj.CREDIT_TBL.CREDIT_REC) {
    return getParsedArray(obj.CREDIT_TBL.CREDIT_REC);
  }
  return null;
}

function getMediaTbl(obj) {
  if (obj.MEDIA_TBL && obj.MEDIA_TBL.MEDIA_REC) {
    return getParsedArray(obj.MEDIA_TBL.MEDIA_REC);
  }
  return null;
}

function getMmTbl(obj) {
  if (obj.MMTBL && obj.MMTBL.MM_REC) {
    return getParsedArray(obj.MMTBL.MM_REC);
  }
  return null;
}

function getPointTbl(obj) {
  if (obj.POINT_TBL && obj.POINT_TBL.POINT_REC) {
    return getParsedArray(obj.POINT_TBL.POINT_REC);
  }
  return null;
}

function getItemTbl(obj) {
  if (obj.ITEM_TBL && obj.ITEM_TBL.ITEM_REC) {
    return getParsedArray(obj.ITEM_TBL.ITEM_REC);
  }
  return null;
}

function getTranTbl(obj) {
  if (obj.TRAN_TBL && obj.TRAN_TBL._text) {
    return getReplaedArrayStr(obj.TRAN_TBL._text.split(','));
  }
  return null;
}

function getParsedArray(obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    return getReplaceString(obj);
  }
  // 配列ではないときは配列を作成
  return [getReplaedArrayStr(obj._text.split(','))];
}

function getReplaceString(obj) {
  if (opt.isSpaceReplace) {
    return obj.map(str => getReplaedArrayStr(str._text.split(',')));
  } else {
    return obj.map(str => getReplaedArrayStr(str._text.split(',')));
  }
}

function getReplaedArrayStr(arrayStr) {
  if (opt.isSpaceReplace) {
    return arrayStr.map(str => replaceAll(str, ' ', opt.repaceString));
  } else {
    return arrayStr;
  }
}

function replaceAll(str, beforeStr, afterStr) {
  var reg = new RegExp(beforeStr, 'g');
  return str.replace(reg, afterStr);
}

export default tranParser;

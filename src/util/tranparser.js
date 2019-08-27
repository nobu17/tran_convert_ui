import Xml2Js from "xml-js";

const tranParser = xmlTran => {
  //root付与
  const tran = "<root>" + xmlTran + "</root>";
  const jsonStr = Xml2Js.xml2json(tran, { compact: true, spaces: 4 });
  console.log("jsonStr", jsonStr);

  const obj = JSON.parse(jsonStr).root;
  console.log("parsedObj", obj);

  return {
    TRAN_TBL: getTranTbl(obj),
    ITEM_TBL: getItemTbl(obj),
    POINT_TBL: getPointTbl(obj),
    MM_TBL: getMmTbl(obj),
    CREDIT_TBL: getCreditTbl(obj),
    MEDIA_TBL: getMediaTbl(obj)
  };
};

function getCreditTbl(obj) {
  if (obj.CREDIT_TBL && obj.CREDIT_TBL.CREDIT_REC) {
    return obj.CREDIT_TBL.CREDIT_REC.map(str => str._text.split(","));
  }
  return null;
}

function getMediaTbl(obj) {
  if (obj.MEDIA_TBL && obj.MEDIA_TBL.MEDIA_REC) {
    return obj.MEDIA_TBL.MEDIA_REC.map(str => str._text.split(","));
  }
  return null;
}

function getMmTbl(obj) {
  if (obj.MMTBL && obj.MMTBL.MM_REC) {
    return obj.MMTBL.MM_REC.map(str => str._text.split(","));
  }
  return null;
}

function getPointTbl(obj) {
  if (obj.POINT_TBL && obj.POINT_TBL.POINT_REC) {
    return obj.POINT_TBL.POINT_REC.map(str => str._text.split(","));
  }
  return null;
}

function getItemTbl(obj) {
  if (obj.ITEM_TBL && obj.ITEM_TBL.ITEM_REC) {
    return obj.ITEM_TBL.ITEM_REC.map(str => str._text.split(","));
  }
  return null;
}

function getTranTbl(obj) {
  if (obj.TRAN_TBL && obj.TRAN_TBL._text) {
    return obj.TRAN_TBL._text.split(",");
  }
  return null;
}

export default tranParser;

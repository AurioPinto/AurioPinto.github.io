import axios from 'axios';

export default async function getVideo() {
  const res = await axios.get('//datam.youlishu.com/dataset/json?oid=5ccfcbcacb30565386b2d901');
  return res.data;
}
export async function getVR() {
  const res = await axios.get('//datam.youlishu.com/dataset/json?oid=5ccfe298cb30565386b2d909');
  return res.data;
}

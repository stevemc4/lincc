// eslint-disable-next-line no-unused-vars
import { NowRequest, NowResponse } from '@now/node'

/**
 * Get user's link list
 * @param {NowRequest} req Request Object
 * @param {NowResponse} res Response Object
 */
export default function (req: NowRequest, res: NowResponse) {
  res.send('tes')
}

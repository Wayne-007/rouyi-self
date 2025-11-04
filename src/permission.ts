import router from './router'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { isHttp, isPathMatch } from '@/utils/validate'
import { isRelogin } from '@/utils/request'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/404', '/401', '/register']
const isWhitePath = (path: string) => whiteList.some((item) => isPathMatch(item, path))

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (getToken()) {
    // to.meta.title
  } else if (isWhitePath(to.path)) {
    next()
  } else {
    next(`/login?redirect=${to.path}`)
  }
})

router.afterEach(() => {
  NProgress.done()
})

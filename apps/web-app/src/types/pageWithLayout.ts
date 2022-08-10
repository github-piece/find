import { NextPage } from 'next'

type PageLayoutType = NextPage & { layout: "Basic" }

type ContentLayoutType = NextPage & { layout: "Auth" }

type PageWithLayoutType = PageLayoutType | ContentLayoutType

export default PageWithLayoutType
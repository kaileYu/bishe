import style from './index.css';
import { connect } from 'dva';
import { Empty } from 'antd';
import { Link } from 'react-router-dom'
function nanjing({ dispatch, props }) {
    if (props.props.list !== null && props.props.list !== undefined) {
        // const ListPageSize = 10;
        // const HotListPageSize = 5;
        // var pageIndex = 1
        // var ListStartIndex = (pageIndex - 1) * ListPageSize;
        // var ListEndIndex = pageIndex * ListPageSize;
        // var HotListStartIndex = (pageIndex - 1) * HotListPageSize;
        // var HotListEndIndex = pageIndex * HotListPageSize;
        // const TempList = props.props.list.slice(ListStartIndex, ListEndIndex)
        // const TempHotList = props.props.hotList.slice(HotListStartIndex, HotListEndIndex);
        return (
            <div className={style.whole}>
                <div className={style.Box}>
                    <div className={style.infoList}>
                        {
                            props.props.list.map(function (item, i) {
                                return (
                                    <div key={i} className={style.List}>
                                        <div className={style.List}>
                                            <div className={style.image}><img alt="" src={item.coverPath} /></div>
                                            <div className={style.info}>
                                                <Link to={{ pathname: '/nanjin/nanjingInfoList', query: { id: item.id } }}><p className={style.title}>{item.title}</p></Link>
                                                <p>
                                                    <span className={style.shopArea}>{item.merchant.shopArea}</span>|<span className={style.name}>{item.merchant.name}</span>
                                                </p>
                                                <p><span className={style.showPrice}>￥{item.showPrice}</span>
                                                    <span className={style.marketPrice}>￥{item.marketPrice}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={style.hotList}>
                        <h2>同城热卖套餐</h2>
                        {
                            props.props.hotList.map(function (item, i) {
                                return (
                                    <div key={i} className={style.HotListDemo}>
                                        <div >
                                            <img alt="" src={item.coverPath} className={style.image2} />
                                        </div>
                                        <div className={style.HotListinfo}>
                                            <p className={style.hotListTitle} alt={item.title}>{item.title}</p>
                                            <p className={style.hotListName}>{item.merchant.name}</p>
                                            <p className={style.HotListShowPrice}>￥{item.showPrice}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={style.recommendMerchants}>
                    <h2>同类套餐商家推荐</h2>
                    <div className={style.recommendMerchantsBox}>
                        {
                            props.props.topQualityMerchant.map(function (item, i) {
                                return (<div className={style.recommendMerchants_imgae} key={i}>
                                    <img alt="" src={item.logoPath} />
                                    <p className={style.recommendMerchants_name}>{item.name}</p>
                                    <p className={style.commentsCount}>{item.commentsCount}评价<span className={style.goodRate}>{item.goodRate * 100}%</span></p>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Empty />
        )
    }
}
function mapStateToProps(state) {
    return {
        props: state.nanjinglist
    }
}

export default connect(mapStateToProps)(nanjing);
import moment from "moment";

export function relativeDateFormatter(date: moment.MomentInput) {
    return moment(date).fromNow()
}
import {h, Component} from 'preact';
import style from './introV2.less';
import Button from '../../button/button';
import Label from '../../label/label';
import IntroFooterV2 from './footerV2';

class LocalLabel extends Label {
    static defaultProps = {
        prefix: 'intro'
    };
}

const HOST_PARTS = ((window && window.location && window.location.hostname) || '').split('.');

export default class IntroV2 extends Component {

    static defaultProps = {};

    componentDidMount() {
        this.props.updateCSSPrefs();
    }

    render(props, state) {
        const {
            onAcceptAll,
            onShowPurposes,
            onClose,
            localization,
            store,
            updateCSSPrefs
        } = props;

        return (<div class={style.intro}>
            <div class={style.description + " primaryText"}><LocalLabel
                providedValue={localization && localization.intro ? localization.intro.description : ''}
                localizeKey='description' class={style.contentMessage}>Ads help us run this site. When you use our site
                selected companies may access and use information on your device for various purposes including to serve
                relevant ads or personalised content.</LocalLabel> <a onClick={onShowPurposes}><LocalLabel
                    providedValue={localization && localization.intro ? localization.intro.showPurposes : ''}
                    localizeKey='showPurposes'>Learn more</LocalLabel></a> <a class="gdprAcceptAllSubmitBtn" onClick={onAcceptAll}><LocalLabel
                    providedValue={localization && localization.intro ? localization.intro.acceptAll : ''}
                    localizeKey='acceptAll'>OK, Continue to site</LocalLabel></a></div>
        </div>);
    }
}

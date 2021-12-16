import React from 'react'
import './icons.scss'

type GoAIconFilledType = `${GoAIconType}-${IconTheme}`;

interface IonIconProps {
  name: GoAIconType | GoAIconFilledType
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IonIconElement extends HTMLElement {
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      'ion-icon': IonIconProps & React.HTMLAttributes<IonIconElement>
    }
  }
}


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      'goa-icon': WCProps & React.HTMLAttributes<IonIconElement>
    }
  }
}

export type GoAIconType
  = 'accessibility'
  | 'add-circle'
  | 'add'
  | 'airplane'
  | 'alarm'
  | 'albums'
  | 'alert-circle'
  | 'alert'
  | 'american-football'
  | 'analytics'
  | 'aperture'
  | 'apps'
  | 'archive'
  | 'arrow-back-circle'
  | 'arrow-back'
  | 'arrow-down-circle'
  | 'arrow-down'
  | 'arrow-forward-circle'
  | 'arrow-forward'
  | 'arrow-redo-circle'
  | 'arrow-redo'
  | 'arrow-undo-circle'
  | 'arrow-undo'
  | 'arrow-up-circle'
  | 'arrow-up'
  | 'at-circle'
  | 'at'
  | 'attach'
  | 'backspace'
  | 'bag-add'
  | 'bag-check'
  | 'bag-handle'
  | 'bag'
  | 'bag-remove'
  | 'balloon'
  | 'ban'
  | 'bandage'
  | 'bar-chart'
  | 'barbell'
  | 'barcode'
  | 'baseball'
  | 'basket'
  | 'basketball'
  | 'battery-charging'
  | 'battery-dead'
  | 'battery-full'
  | 'battery-half'
  | 'beaker'
  | 'bed'
  | 'beer'
  | 'bicycle'
  | 'bluetooth'
  | 'boat'
  | 'body'
  | 'bonfire'
  | 'book'
  | 'bookmark'
  | 'bookmarks'
  | 'bowling-ball'
  | 'briefcase'
  | 'browsers'
  | 'brush'
  | 'bug'
  | 'build'
  | 'bulb'
  | 'bus'
  | 'business'
  | 'cafe'
  | 'calculator'
  | 'calendar-clear'
  | 'calendar-number'
  | 'calendar'
  | 'call'
  | 'camera'
  | 'camera-reverse'
  | 'car'
  | 'car-sport'
  | 'card'
  | 'caret-back-circle'
  | 'caret-back'
  | 'caret-down-circle'
  | 'caret-down'
  | 'caret-forward-circle'
  | 'caret-forward'
  | 'caret-up-circle'
  | 'caret-up'
  | 'cart'
  | 'cash'
  | 'cellular'
  | 'chatbox-ellipses'
  | 'chatbox'
  | 'chatbubble-ellipses'
  | 'chatbubble'
  | 'chatbubbles'
  | 'checkbox'
  | 'checkmark-circle'
  | 'checkmark-done-circle'
  | 'checkmark-done'
  | 'checkmark'
  | 'chevron-back-circle'
  | 'chevron-back'
  | 'chevron-down-circle'
  | 'chevron-down'
  | 'chevron-forward-circle'
  | 'chevron-forward'
  | 'chevron-up-circle'
  | 'chevron-up'
  | 'clipboard'
  | 'close-circle'
  | 'close'
  | 'cloud-circle'
  | 'cloud-done'
  | 'cloud-download'
  | 'cloud-offline'
  | 'cloud'
  | 'cloud-upload'
  | 'cloudy-night'
  | 'cloudy'
  | 'code-download'
  | 'code'
  | 'code-slash'
  | 'code-working'
  | 'cog'
  | 'color-fill'
  | 'color-filter'
  | 'color-palette'
  | 'color-wand'
  | 'compass'
  | 'construct'
  | 'contract'
  | 'contrast'
  | 'copy'
  | 'create'
  | 'crop'
  | 'cube'
  | 'cut'
  | 'desktop'
  | 'diamond'
  | 'dice'
  | 'disc'
  | 'document-attach'
  | 'document-lock'
  | 'document'
  | 'document-text'
  | 'documents'
  | 'download'
  | 'duplicate'
  | 'ear'
  | 'earth'
  | 'easel'
  | 'egg'
  | 'ellipse'
  | 'ellipsis-horizontal-circle'
  | 'ellipsis-horizontal'
  | 'ellipsis-vertical-circle'
  | 'ellipsis-vertical'
  | 'enter'
  | 'exit'
  | 'expand'
  | 'extension-puzzle'
  | 'eye-off'
  | 'eye'
  | 'eyedrop'
  | 'fast-food'
  | 'female'
  | 'file-tray-full'
  | 'file-tray'
  | 'file-tray-stacked'
  | 'filenames.ps1'
  | 'film'
  | 'filter-circle'
  | 'filter'
  | 'finger-print'
  | 'fish'
  | 'fitness'
  | 'flag'
  | 'flame'
  | 'flash-off'
  | 'flash'
  | 'flashlight'
  | 'flask'
  | 'flower'
  | 'folder-open'
  | 'folder'
  | 'football'
  | 'footsteps'
  | 'funnel'
  | 'game-controller'
  | 'gift'
  | 'git-branch'
  | 'git-commit'
  | 'git-compare'
  | 'git-merge'
  | 'git-network'
  | 'git-pull-request'
  | 'glasses'
  | 'globe'
  | 'golf'
  | 'grid'
  | 'hammer'
  | 'hand-left'
  | 'hand-right'
  | 'happy'
  | 'hardware-chip'
  | 'headset'
  | 'heart-circle'
  | 'heart-dislike-circle'
  | 'heart-dislike'
  | 'heart-half'
  | 'heart'
  | 'help-buoy'
  | 'help-circle'
  | 'help'
  | 'home'
  | 'hourglass'
  | 'ice-cream'
  | 'id-card'
  | 'image'
  | 'images'
  | 'infinite'
  | 'information-circle'
  | 'information'
  | 'invert-mode'
  | 'journal'
  | 'key'
  | 'keypad'
  | 'language'
  | 'laptop'
  | 'layers'
  | 'leaf'
  | 'library'
  | 'link'
  | 'list-circle'
  | 'list'
  | 'locate'
  | 'location'
  | 'lock-closed'
  | 'lock-open'
  | 'log-in'
  | 'log-out'
  | 'magnet'
  | 'mail-open'
  | 'mail'
  | 'mail-unread'
  | 'male-female'
  | 'male'
  | 'man'
  | 'map'
  | 'medal'
  | 'medical'
  | 'medkit'
  | 'megaphone'
  | 'menu'
  | 'mic-circle'
  | 'mic-off-circle'
  | 'mic-off'
  | 'mic'
  | 'moon'
  | 'move'
  | 'musical-note'
  | 'musical-notes'
  | 'navigate-circle'
  | 'navigate'
  | 'newspaper'
  | 'notifications-circle'
  | 'notifications-off-circle'
  | 'notifications-off'
  | 'notifications'
  | 'nuclear'
  | 'nutrition'
  | 'open'
  | 'options'
  | 'paper-plane'
  | 'partly-sunny'
  | 'pause-circle'
  | 'pause'
  | 'paw'
  | 'pencil'
  | 'people-circle'
  | 'people'
  | 'person-add'
  | 'person-circle'
  | 'person'
  | 'person-remove'
  | 'phone-landscape'
  | 'phone-portrait'
  | 'pie-chart'
  | 'pin'
  | 'pint'
  | 'pizza'
  | 'planet'
  | 'play-back-circle'
  | 'play-back'
  | 'play-circle'
  | 'play-forward-circle'
  | 'play-forward'
  | 'play'
  | 'play-skip-back-circle'
  | 'play-skip-back'
  | 'play-skip-forward-circle'
  | 'play-skip-forward'
  | 'podium'
  | 'power'
  | 'pricetag'
  | 'pricetags'
  | 'print'
  | 'prism'
  | 'pulse'
  | 'push'
  | 'qr-code'
  | 'radio-button-off'
  | 'radio-button-on'
  | 'radio'
  | 'rainy'
  | 'reader'
  | 'receipt'
  | 'recording'
  | 'refresh-circle'
  | 'refresh'
  | 'reload-circle'
  | 'reload'
  | 'remove-circle'
  | 'remove'
  | 'reorder-four'
  | 'reorder-three'
  | 'reorder-two'
  | 'repeat'
  | 'resize'
  | 'restaurant'
  | 'return-down-back'
  | 'return-down-forward'
  | 'return-up-back'
  | 'return-up-forward'
  | 'ribbon'
  | 'rocket'
  | 'rose'
  | 'sad'
  | 'save'
  | 'scale'
  | 'scan-circle'
  | 'scan'
  | 'school'
  | 'search-circle'
  | 'search'
  | 'send'
  | 'server'
  | 'settings'
  | 'shapes'
  | 'share'
  | 'share-social'
  | 'shield-checkmark'
  | 'shield-half'
  | 'shield'
  | 'shirt'
  | 'shuffle'
  | 'skull'
  | 'snow'
  | 'sparkles'
  | 'speedometer'
  | 'square'
  | 'star-half'
  | 'star'
  | 'stats-chart'
  | 'stop-circle'
  | 'stop'
  | 'stopwatch'
  | 'storefront'
  | 'subway'
  | 'sunny'
  | 'swap-horizontal'
  | 'swap-vertical'
  | 'sync-circle'
  | 'sync'
  | 'tablet-landscape'
  | 'tablet-portrait'
  | 'telescope'
  | 'tennisball'
  | 'terminal'
  | 'text'
  | 'thermometer'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'thunderstorm'
  | 'ticket'
  | 'time'
  | 'timer'
  | 'today'
  | 'toggle'
  | 'trail-sign'
  | 'train'
  | 'transgender'
  | 'trash-bin'
  | 'trash'
  | 'trending-down'
  | 'trending-up'
  | 'triangle'
  | 'trophy'
  | 'tv'
  | 'umbrella'
  | 'unlink'
  | 'videocam-off'
  | 'videocam'
  | 'volume-high'
  | 'volume-low'
  | 'volume-medium'
  | 'volume-mute'
  | 'volume-off'
  | 'walk'
  | 'wallet'
  | 'warning'
  | 'watch'
  | 'water'
  | 'wifi'
  | 'wine'
  | 'woman'
  ;

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';
export type IconVariant = 'primary' | 'secondary' | 'tertiary';
export type IconTheme = 'outline' | 'filled' | 'sharp';


interface Props {
  type: GoAIconType;
  size?: IconSize;
  theme?: IconTheme;
}

interface WCProps {
  type: GoAIconType;
  theme: IconTheme;
  size: IconSize;
}

export function GoAIcon({ type, theme = 'outline', size = 'medium' }: Props): JSX.Element {
  return (
    <goa-icon type={type} theme={theme} size={size}  />
  );
}

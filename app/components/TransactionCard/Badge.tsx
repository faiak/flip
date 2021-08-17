import { colors } from 'app/config/styles';
import React from 'react';
import BaseBadge, { Props as BadgeProps } from 'app/components/Badge';

export type Props = {
  status: 'SUCCESS' | 'PENDING';
};

const badgeStyle: { SUCCESS: BadgeProps; PENDING: BadgeProps } = {
  SUCCESS: {
    color: colors.COLOR_GREEN,
    isOutline: false,
    label: 'Berhasil',
  },
  PENDING: {
    color: colors.COLOR_ORANGE,
    isOutline: true,
    label: 'Pengecekan',
  },
};

const Badge: React.FC<Props> = ({ status }) => {
  return <BaseBadge {...badgeStyle[status]} />;
};

export default Badge;

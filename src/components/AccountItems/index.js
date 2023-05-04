import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        alt="Hoa"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8o7hpp92Vb2EN7VC1_p1TMvu1T8i_9qVmCA&usqp=CAU"
      ></img>
      <div className={cx('infomation')}>
        <p className={cx('nickname')}>
          <span>gravis97</span>
          <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
        </p>
        <p className={cx('fullname')}>Gravis Devil</p>
      </div>
    </div>
  );
}

export default AccountItem;

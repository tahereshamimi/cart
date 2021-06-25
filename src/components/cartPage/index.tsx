import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { useStyles } from './styles'

const CartPage = () => {
    const styles = useStyles();
    return (
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.header)}>
                <div className={classNames(styles.logoBox)}></div>
                <div className={classNames(styles.headerTexts)}>
                    <div>Techno Market</div>
                    <div>stars</div>
                    <div>address</div>
                </div>

            </div>
            

        </div>
    )
}
export { CartPage }
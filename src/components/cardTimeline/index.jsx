import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Module

const CardTimeline = ({ imagem, texto, margem }) => {
    return (
        <div className={styles.container}>
            <div style={{ marginBottom: margem }} className={styles.card}>
                <img className={styles.imagem} src={imagem} alt="" />
                <div className={styles.texto}>
                    {texto}
                </div>
            </div>
            <div className={styles.audio}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_633_1592)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4123 2.94263V47.0611H23.5298L11.7649 35.2961V14.7075L23.5298 2.94263H29.4123ZM43.5411 9.40244C47.7088 13.5702 50 19.1114 50 25.0027C50 30.894 47.7088 36.4323 43.5411 40.6L41.4616 38.5206C45.0734 34.9117 47.0587 30.1087 47.0587 25.0027C47.0587 19.8938 45.0734 15.0937 41.4616 11.4819L43.5411 9.40244ZM8.8237 14.7075V35.2961H4.41185C1.97062 35.2961 0 33.3255 0 30.8843V19.1194C0 16.6782 1.97062 14.7075 4.41185 14.7075H8.8237ZM37.3112 15.6473C39.8054 18.1738 41.176 21.4974 41.176 25.0004C41.176 28.5063 39.8054 31.8299 37.3112 34.3564L35.22 32.2946C37.1642 30.3181 38.2348 27.7269 38.2348 25.0004C38.2348 22.2768 37.1642 19.6856 35.22 17.7091L37.3112 15.6473Z" fill="#897869" />
                    </g>
                    <defs>
                        <clipPath id="clip0_633_1592">
                            <rect width="50" height="50" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
    );
};

export default CardTimeline;

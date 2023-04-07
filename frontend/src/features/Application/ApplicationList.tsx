import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../store';
import { initApplication } from './applSlice';
import ApplicationCard from './ApplicationCard';

function ApplicationList(): JSX.Element {
  const { id } = useParams();
  const { applicationsArr } = useSelector(
    (store: RootState) => store.application,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initApplication(Number(id)));
  }, []);

  return (
    <div style={{ width: '100vw' }}>
      <table>
        <tr>
          <th />
          <th />
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Электронная почта</th>
          <th>Дата рождения</th>
          <th>Город</th>
          <th>Телефон</th>
          <th>В/у (серия и номер)</th>
          <th>Наличие лицензии водителя РАФ</th>
          <th>Наличие мед. заключения</th>
          <th>Марка и модель авто</th>
          <th>Госномер авто</th>
          <th>Объем двигателя</th>
          <th>Тип привода</th>
          <th>Марка, модель покрышек</th>
          <th>Наличие надува</th>
          <th>Многодроссельный впуск</th>
          <th>Измененные фазы газораспределения</th>
          <th>Нестандартный впуск</th>
          <th>Изменения кузова</th>
          <th>Зачетная группа</th>
          <th>Название команды</th>
          <th>Использование автомобиля другими участниками (ФИО)</th>
          <th>Стартовый номер</th>
        </tr>
        {applicationsArr.length > 0
          ? applicationsArr.map((application) => (
              <ApplicationCard
                // key={application.id}
                application={application}
                id={Number(id)}
              />
            ))
          : null}
      </table>
    </div>
  );
}

export default ApplicationList;

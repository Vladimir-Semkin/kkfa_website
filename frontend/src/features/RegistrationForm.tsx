/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';

import style from './RegistrationForm.module.css';
import { Application } from './Participants/types/types';
import { addApplication } from './Participants/applicationSlice';

export default function RegistrationForm(): JSX.Element {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Application>();

  const onSubmit = handleSubmit((data) => {
    dispatch(addApplication(data));
  });

  return (
    <div>
      <form className={style.form} onSubmit={onSubmit}>
        <input {...register('name', { required: true })} placeholder="имя" />
        <div>
          {errors?.name && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>

        <input
          {...register('familiya', { required: true })}
          placeholder="фамилия"
        />
        <div>
          {errors?.familiya && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>

        <input
          {...register('otchestvo', { required: true })}
          placeholder="отчество"
        />
        <div>
          {errors?.otchestvo && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>

        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="электронная почта"
        />
        <div>
          {errors?.email && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>
        <input
          {...register('datarojdeniya', { required: true })}
          type="date"
          placeholder="дата рождения"
        />
        <div>
          {errors?.datarojdeniya && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>
        <input {...register('gorod', { required: true })} placeholder="город" />
        <div>
          {errors?.gorod && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>
        <input
          {...register('phone', { required: true })}
          placeholder="телефон"
        />
        <div>
          {errors?.phone && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>
        <input
          {...register('udostovorenieVoditel', { required: true })}
          placeholder="водительское удостоверение (серия и номер)"
        />
        <div>
          {errors?.udostovorenieVoditel && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>

        <p>
          Наличие лицензии водителя РАФ или другой НАФ (!обязательное условие
          для участия в этапе!):
        </p>
        <select {...register('licenseRAFNAF', { required: true })}>
          {/* <option /> */}
          <option
            value="Нет, планирую оформить на этапе (про наличие мед.заключения
            проинформирован)"
          >
            Нет, планирую оформить на этапе (про наличие мед.заключения
            проинформирован)
          </option>
          <option value="Да">Да</option>
        </select>
        <div>
          {errors?.licenseRAFNAF && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>

        <input
          {...register('medicalReport', { required: true })}
          placeholder="Наличие медицинского заключения (!обязательное условие для участия в этапе!) - указать наименование мед.учреждения и дату выдачи"
        />
        <div>
          {errors?.medicalReport && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>
        <input
          {...register('markaModelAuto', { required: true })}
          placeholder="Марка и модель авто (!полностью!)"
        />
        <div>
          {errors?.markaModelAuto && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>
        <input {...register('gosNomer')} placeholder="госномер авто" />

        <input
          {...register('objemDvigatelya', { required: true })}
          placeholder="объем двигателя"
        />
        <div>
          {errors?.objemDvigatelya && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>

        <div className={style.type}>
          <p>тип привода:</p>
          <p>
            <input
              {...register('tipPrivoda', { required: true })}
              type="radio"
              value="передний"
            />
            передний
          </p>
          <p>
            <input
              {...register('tipPrivoda', { required: true })}
              type="radio"
              value="задний"
            />
            задний
          </p>
          <p>
            <input
              {...register('tipPrivoda', { required: true })}
              type="radio"
              value="полный"
            />
            полный
          </p>
          <div>
            {errors?.tipPrivoda && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <input
          {...register('markaModelPokryshek')}
          placeholder="марка, модель покрышек"
        />

        <div className={style.type}>
          <p>наличие надува:</p>

          <p>
            <input {...register('nalichieNadduva')} type="radio" value="да" />
            да
          </p>
          <p>
            <input {...register('nalichieNadduva')} type="radio" value="нет" />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Многодроссельный впуск:</p>

          <p>
            <input
              {...register('mnogodresselnyVpusk')}
              type="radio"
              value="да"
            />
            да
          </p>
          <p>
            <input
              {...register('mnogodresselnyVpusk')}
              type="radio"
              value="нет"
            />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Измененные фазы газораспределения:</p>

          <p>
            <input
              {...register('izmFazyGazoraspredeleniya')}
              type="radio"
              value="да"
            />
            да
          </p>
          <p>
            <input
              {...register('izmFazyGazoraspredeleniya')}
              type="radio"
              value="нет"
            />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Нестандартный впуск:</p>

          <p>
            <input {...register('nestandartnyVpusk')} type="radio" value="да" />
            да
          </p>
          <p>
            <input
              {...register('nestandartnyVpusk')}
              type="radio"
              value="нет"
            />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Изменения кузова (замена кузовных элементов, каркас и т.п.):</p>

          <p>
            <input {...register('izmKuzova')} type="radio" value="да" />
            да
          </p>
          <p>
            <input {...register('izmKuzova')} type="radio" value="нет" />
            нет
          </p>
        </div>

        <div>
          <p>
            Зачетная группа (с крайнего этапа 2022 года, в котором принимали
            участие):
          </p>

          <p>
            <input
              {...register('groupListId', { required: true })}
              type="checkbox"
              // value="Стандарт 1"
              value="1"
            />{' '}
            Стандарт 1
          </p>
          <p>
            <input
              {...register('groupListId', { required: true })}
              type="checkbox"
              // value="Стандарт 2"
              value="2"
            />{' '}
            Стандарт 2
          </p>

          <p>
            <input
              {...register('groupListId', { required: true })}
              type="checkbox"
              // value="Турбо Сток"
              value="3"
            />{' '}
            Турбо Сток
          </p>
          <p>
            <input
              {...register('groupListId', { required: true })}
              type="checkbox"
              // value="Sport"
              value="4"
            />{' '}
            Sport
          </p>

          <p>
            <input
              {...register('groupListId', { required: true })}
              type="checkbox"
              // value="GT"
              value="5"
            />{' '}
            GT
          </p>
          <p>
            <input
              {...register('groupListId', { required: true })}
              type="checkbox"
              // value="Unlim"
              value="6"
            />{' '}
            Unlim
          </p>

          <p>
            <input
              {...register('groupListId', { required: true })}
              type="checkbox"
              // value="не знаю, участвую первый раз (первый раз на данном автомобиле)"
              value="7"
            />{' '}
            не знаю, участвую первый раз (первый раз на данном автомобиле)
          </p>
          <div>
            {errors?.groupListId && (
              <p className={style.error}>Поле обязательно для заполнения!</p>
            )}
          </div>
        </div>

        {/* <input
          {...register('team')}
          placeholder="Команда (указывается при условии заявления команды для участия в Чемпионате)"
        /> */}
        <div>
          Название команды:
          <select {...register('team')}>
            <option />
            <option value="1">Red Bull Racing</option>
            <option value="2">Honda Power</option>
            <option value="3">Котики Motorsport</option>
            <option value="4">Zone 402</option>
            <option value="5">ARS Stavropol</option>
          </select>
        </div>

        <input
          {...register('ispolzovanieAutoDrugimi')}
          placeholder="Использование автомобиля другими участниками (указать ФИО)"
        />
        <input
          {...register('startNomer')}
          placeholder="Стартовый номер (от 1 до 99) (желаемый!* будет подтвержден при регистрации)"
        />

        <div>
          <input type="submit" /* disabled={!isValid} */ />
        </div>
      </form>
    </div>
  );
}

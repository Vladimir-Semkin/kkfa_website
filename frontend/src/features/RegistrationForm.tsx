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
        <input {...register('otchestvo')} placeholder="отчество" />
        <input
          {...register('email', { required: true })}
          placeholder="электронная почта"
        />
        <div>
          {errors?.email && (
            <p className={style.error}>Поле обязательно для заполнения</p>
          )}
        </div>
        <input
          {...register('datarojdeniya', { required: true })}
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

        <select {...register('licenseRAFNAF', { required: true })}>
          <option>-</option>
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

        <div className={style.type} {...register('tipPrivoda')}>
          <p>тип привода:</p>

          <p>
            <input name="type" type="radio" />
            передний
          </p>
          <p>
            <input name="type" type="radio" />
            задний
          </p>
          <p>
            <input name="type" type="radio" />
            полный
          </p>
          {/* <div>
            {errors?.ptivodType && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div> */}
        </div>

        <input
          {...register('markaModelPokryshek')}
          placeholder="марка, модель покрышек"
        />

        <div className={style.type}>
          <p>наличие надува:</p>

          <p>
            <input {...register('nalichieNadduva')} name="naduv" type="radio" />
            да
          </p>
          <p>
            <input {...register('nalichieNadduva')} name="naduv" type="radio" />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Многодроссельный впуск:</p>

          <p>
            <input
              {...register('mnogodresselnyVpusk')}
              name="vpusk"
              type="radio"
            />
            да
          </p>
          <p>
            <input
              {...register('mnogodresselnyVpusk')}
              name="vpusk"
              type="radio"
            />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Измененные фазы газораспределения:</p>

          <p>
            <input
              {...register('izmFazyGazoraspredeleniya')}
              name="gaz"
              type="radio"
            />
            да
          </p>
          <p>
            <input
              {...register('izmFazyGazoraspredeleniya')}
              name="gaz"
              type="radio"
            />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Нестандартный впуск:</p>

          <p>
            <input
              {...register('nestandartnyVpusk')}
              name="vpuskN"
              type="radio"
            />
            да
          </p>
          <p>
            <input
              {...register('nestandartnyVpusk')}
              name="vpuskN"
              type="radio"
            />
            нет
          </p>
        </div>

        <div className={style.type}>
          <p>Изменения кузова (замена кузовных элементов, каркас и т.п.):</p>

          <p>
            <input {...register('izmKuzova')} name="cuzov" type="radio" />
            да
          </p>
          <p>
            <input {...register('izmKuzova')} name="cuzov" type="radio" />
            нет
          </p>
        </div>

        <div {...register('team')}>
          <p>
            Зачетная группа (с крайнего этапа 2022 года, в котором принимали
            участие):
          </p>

          <p>
            <input
              {...register('groupListId')}
              name="group"
              type="checkbox"
              value="1"
            />{' '}
            Стандарт 1
          </p>
          <p>
            <input
              {...register('groupListId')}
              name="group"
              type="checkbox"
              value="2"
            />{' '}
            Стандарт 2
          </p>

          <p>
            <input
              {...register('groupListId')}
              name="group"
              type="checkbox"
              value="3"
            />{' '}
            Турбо Сток
          </p>
          <p>
            <input
              {...register('groupListId')}
              name="group"
              type="checkbox"
              value="4"
            />{' '}
            Sport
          </p>

          <p>
            <input
              {...register('groupListId')}
              name="group"
              type="checkbox"
              value="5"
            />{' '}
            GT
          </p>
          <p>
            <input
              {...register('groupListId')}
              name="group"
              type="checkbox"
              value="6"
            />{' '}
            Unlim
          </p>

          <p>
            <input
              {...register('groupListId')}
              name="groupRace"
              type="checkbox"
              value="7"
            />{' '}
            не знаю, участвую первый раз (первый раз на данном автомобиле)
          </p>
          {/* <div>
            {errors?.groupRace && (
              <p className={style.error}>
                Поле обязательно для заполнения11111
              </p>
            )}
          </div> */}
        </div>

        <input
          {...register('team')}
          placeholder="Команда (указывается при условии заявления команды для участия в Чемпионате)"
        />
        <input
          {...register('ispolzovanieAutoDrugimi')}
          placeholder="Использование автомобиля другими участниками (указать ФИО)"
        />
        <input
          {...register('startNomer')}
          placeholder="Стартовый номер (от 1 до 99) (желаемый!* будет подтвержден при регистрации)"
        />

        <div>
          <input type="submit" /*disabled={!isValid}*/ />
        </div>
      </form>
    </div>
  );
}

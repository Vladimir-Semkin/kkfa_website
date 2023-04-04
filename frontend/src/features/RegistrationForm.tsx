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
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={onSubmit}>
        <div>
          <p>Имя:</p>
          <input
            className={style.wind}
            {...register('name', { required: true })}
            placeholder="Имя"
          />
          <div>
            {errors?.name && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Фамилия:</p>
          <input
            className={style.wind}
            {...register('familiya', { required: true })}
            placeholder="Фамилия"
          />
          <div>
            {errors?.familiya && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Отчество:</p>
          <input
            className={style.wind}
            {...register('otchestvo', { required: true })}
            placeholder="Отчество"
          />
          <div>
            {errors?.otchestvo && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Электронная почта:</p>
          <input
            className={style.wind}
            {...register('email', { required: true })}
            type="email"
            placeholder="Электронная почта"
          />
          <div>
            {errors?.email && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Дата рождения:</p>
          <input
            className={style.wind}
            {...register('datarojdeniya', { required: true })}
            type="date"
            placeholder="Дата рождения"
          />
          <div>
            {errors?.datarojdeniya && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Город:</p>
          <input
            className={style.wind}
            {...register('gorod', { required: true })}
            placeholder="Город"
          />
          <div>
            {errors?.gorod && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Телефон:</p>
          <input
            className={style.wind}
            {...register('phone', { required: true })}
            placeholder="Телефон"
          />
          <div>
            {errors?.phone && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>В/у (серия и номер):</p>
          <input
            className={style.wind}
            {...register('udostovorenieVoditel', { required: true })}
            placeholder="В/у (серия и номер)"
          />
          <div>
            {errors?.udostovorenieVoditel && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Наличие лицензии водителя РАФ (обязательно для участия!):</p>
          <select
            className={style.medSelect}
            {...register('licenseRAFNAF', { required: true })}
          >
            {/* <option /> */}
            <option value="Планирую оформить на этапе">
              Планирую оформить на этапе
            </option>
            <option value="Да">Да</option>
          </select>
          <div>
            {errors?.licenseRAFNAF && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>
            Наличие мед. заключения. Указать наименование мед.учреждения и дату
            выдачи:
          </p>
          <input
            className={style.wind}
            {...register('medicalReport', { required: true })}
            placeholder="Наличие мед. заключения. Указать наименование мед.учреждения и дату выдачи"
          />
          <div>
            {errors?.medicalReport && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Марка и модель авто (полностью!):</p>
          <input
            className={style.wind}
            {...register('markaModelAuto', { required: true })}
            placeholder="Марка и модель авто (полностью!)"
          />
          <div>
            {errors?.markaModelAuto && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Госномер авто:</p>
          <input
            className={style.wind}
            {...register('gosNomer')}
            placeholder="Госномер авто"
          />
        </div>

        <div>
          <p>Объем двигателя:</p>
          <input
            className={style.wind}
            {...register('objemDvigatelya', { required: true })}
            placeholder="Объем двигателя"
          />
          <div>
            {errors?.objemDvigatelya && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Тип привода:</p>
          <div className={style.type}>
            <p>
              <input
                {...register('tipPrivoda', { required: true })}
                type="radio"
                value="передний"
              />
              Передний
            </p>
            <p>
              <input
                {...register('tipPrivoda', { required: true })}
                type="radio"
                value="задний"
              />
              Задний
            </p>
            <p>
              <input
                {...register('tipPrivoda', { required: true })}
                type="radio"
                value="полный"
              />
              Полный
            </p>
          </div>
          <div>
            {errors?.tipPrivoda && (
              <p className={style.error}>Поле обязательно для заполнения</p>
            )}
          </div>
        </div>

        <div>
          <p>Марка, модель покрышек:</p>
          <input
            className={style.wind}
            {...register('markaModelPokryshek')}
            placeholder="марка, модель покрышек"
          />
        </div>

        <div>
          <p>Наличие надува:</p>
          <div className={style.type}>
            <p>
              <input {...register('nalichieNadduva')} type="radio" value="да" />
              Да
            </p>
            <p>
              <input
                {...register('nalichieNadduva')}
                type="radio"
                value="нет"
              />
              Нет
            </p>
          </div>
        </div>

        <div>
          <p>Многодроссельный впуск:</p>
          <div className={style.type}>
            <p>
              <input
                {...register('mnogodresselnyVpusk')}
                type="radio"
                value="да"
              />
              Да
            </p>
            <p>
              <input
                {...register('mnogodresselnyVpusk')}
                type="radio"
                value="нет"
              />
              Нет
            </p>
          </div>
        </div>

        <div>
          <p>Измененные фазы газораспределения:</p>
          <div className={style.type}>
            <p>
              <input
                {...register('izmFazyGazoraspredeleniya')}
                type="radio"
                value="да"
              />
              Да
            </p>
            <p>
              <input
                {...register('izmFazyGazoraspredeleniya')}
                type="radio"
                value="нет"
              />
              Нет
            </p>
          </div>
        </div>

        <div>
          <p>Нестандартный впуск:</p>
          <div className={style.type}>
            <p>
              <input
                {...register('nestandartnyVpusk')}
                type="radio"
                value="да"
              />
              Да
            </p>
            <p>
              <input
                {...register('nestandartnyVpusk')}
                type="radio"
                value="нет"
              />
              Нет
            </p>
          </div>
        </div>

        <div>
          <p>Изменения кузова (замена кузовных элементов, каркас и т.п.):</p>
          <div className={style.type}>
            <p>
              <input {...register('izmKuzova')} type="radio" value="да" />
              Да
            </p>
            <p>
              <input {...register('izmKuzova')} type="radio" value="нет" />
              Нет
            </p>
          </div>
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
            Не знаю, участвую первый раз (первый раз на данном автомобиле)
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
          <select className={style.groupSelect} {...register('team')}>
            <option />
            <option value="1">Red Bull Racing</option>
            <option value="2">Honda Power</option>
            <option value="3">Котики Motorsport</option>
            <option value="4">Zone 402</option>
            <option value="5">ARS Stavropol</option>
          </select>
        </div>

        <div>
          <p>Использование автомобиля другими участниками (ФИО):</p>
          <input
            className={style.wind}
            {...register('ispolzovanieAutoDrugimi')}
            placeholder="Использование автомобиля другими участниками (указать ФИО)"
          />
        </div>

        <div>
          <p>
            Стартовый номер (от 1 до 99) (желаемый!* будет подтвержден при
            регистрации)
          </p>
          <input
            className={style.wind}
            {...register('startNomer')}
            placeholder="Стартовый номер (от 1 до 99) (желаемый!* будет подтвержден при регистрации)"
          />
        </div>

        <div>
          <p>Название соревнования????????</p>
          <input
            className={style.wind}
            {...register('raceEventId')}
            placeholder="race"
          />
        </div>

        <div>
          <input
            className={style.btn}
            type="submit" /* disabled={!isValid} */
          />
        </div>
      </form>
    </div>
  );
}

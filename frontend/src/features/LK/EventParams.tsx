import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { photoRouter, updRace } from './lkSlice';
import style from './EventParams.module.css';

function EventParams(): JSX.Element {
  const { id } = useParams();
  const { racesArr } = useSelector((store: RootState) => store.lk);
  const race = racesArr.find((el) => el.id === Number(id));
  const [title, setTitle] = useState(race?.title);
  const [date, setDate] = useState(race?.date);
  const [photo, setPhoto] = useState(race?.photo);
  const [description, setDescription] = useState(race?.description);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function update(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(updRace({ id: Number(id), title, date, photo, description }));
  }

  const sendFiles = async (e: any): Promise<any> => {
    const picturesData = [...e.target.files];
    try {
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append('homesImg', img);
      });
      data.append('id', String(id));

      dispatch(photoRouter(data));
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <div className="col s3 ">
      {race && (
        <div className="card-image">
          <div onClick={() => navigate(`/lk/race/${id}/application`)}>
            Заявки
          </div>
          <div onClick={() => navigate(`/lk/race/${id}/participant`)}>
            Участники
          </div>
          <p>Результаты</p>
          <form onSubmit={update}>
            <p>Название:</p>
            <input onChange={(e) => setTitle(e.target.value)} value={title} />

            <p>Дата:</p>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />

            <p>Фото:</p>
            <input onChange={(e) => setPhoto(e.target.value)} value={photo} />

            <p>Описание:</p>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <div>
              {race.photo && (
                <img
                  className={style.updPhoto}
                  src={race.photo}
                  alt="cardPhoto"
                />
              )}
            </div>
            <div>
              <button className={style.btnUpd} type="submit">
                сохранить изменения
              </button>
            </div>
          </form>

          <div>{}</div>

          <div style={{ margin: '40px' }}>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <input
                className={style.hidden}
                type="file"
                multiple
                onChange={sendFiles}
              />
              <button
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  width: '115px',
                }}
                type="submit"
              >
                Добавить фотографии
              </button>
            </form>
          </div>
        </div>
      )}
      <button type="button" onClick={() => navigate(-1)}>
        назад
      </button>
    </div>
  );
}

export default EventParams;

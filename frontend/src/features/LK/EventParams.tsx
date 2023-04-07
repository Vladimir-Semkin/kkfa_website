import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { photoRouter, updRace } from './lkSlice';
// import style from './EventParams.module.css';
import './FormAddRace.css';

function EventParams(): JSX.Element {
  const { id } = useParams();
  const { racesArr } = useSelector((store: RootState) => store.lk);
  const race = racesArr.find((el) => el.id === Number(id));
  const [title, setTitle] = useState(race?.title);
  const [date, setDate] = useState(race?.date);
  const [photo, setPhoto] = useState(race?.photo);
  const [description, setDescription] = useState(race?.description);
  const [link, setLink] = useState(race?.link);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function update(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(
      updRace({ id: Number(id), title, date, photo, description, link }),
    );
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
    <div className="col-3">
      {race && (
        <div>
          <div onClick={() => navigate(`/lk/race/${id}/application`)}>
            Заявки
          </div>
          <div onClick={() => navigate(`/lk/race/${id}/participant`)}>
            Участники
          </div>
          {/* <div onClick={() => navigate(`/lk/race/${id}/results`)}>
            Результаты
          </div> */}
          <div className="decor">
            <div className="form-left-decoration" />
            <div className="form-right-decoration" />
            <div className="circle" />
            <div className="form-inner">
              <form onSubmit={update}>
                <p>Название:</p>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />

                <p>Дата:</p>
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />

                <p>Фото:</p>
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  value={photo}
                />

                <p>Описание:</p>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <div>
                  {race.photo && (
                    <img
                      className="updPhoto"
                      src={race.photo}
                      alt="cardPhoto"
                    />
                  )}
                </div>
                <div>
                  <p>Ссылка на удаленное облако </p>
                  <p>Фотографий</p>
                  <input
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                  />
                </div>
                <div>
                  <input type="submit" value="Cохранить изменения" />
                </div>
              </form>
            </div>
            <div>{}</div>

            <div style={{ margin: '40px' }} className="form-inner">
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <input
                  className="hidden"
                  type="file"
                  multiple
                  onChange={sendFiles}
                />
                <input
                  type="submit"
                  className="addMorePhotos"
                  value="Добавить фотографии"
                />
              </form>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}

      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      > */}
      {/* <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            width: '115px',
          }}
          type="submit"
        >
          Установить
        </button> */}
      {/* </div> */}
      <button type="button" onClick={() => navigate(-1)}>
        назад
      </button>
    </div>
  );
}

export default EventParams;
